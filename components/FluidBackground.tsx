'use client';

import { useEffect, useRef, useCallback } from 'react';

export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initCanvas = useCallback((canvas: HTMLCanvasElement) => {
    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false
    });

    if (!gl) {
      console.error('WebGL not supported');
      return null;
    }

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader
    const fragmentShaderSource = `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;
      uniform vec2 mouse;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        float dist = distance(uv, mouse);

        float wave1 = sin(dist * 10.0 - time * 2.0) * 0.5 + 0.5;
        float wave2 = cos(dist * 8.0 + time * 1.5) * 0.5 + 0.5;

        vec3 color1 = vec3(
          sin(time * 0.5 + uv.x * 5.0) * 0.5 + 0.5,
          sin(time * 0.6 + uv.y * 5.0 + 2.0) * 0.5 + 0.5,
          sin(time * 0.7 + dist * 8.0 + 4.0) * 0.5 + 0.5
        );

        vec3 color2 = vec3(
          cos(time * 0.3 + uv.y * 4.0) * 0.5 + 0.5,
          cos(time * 0.4 - uv.x * 4.0 + 3.0) * 0.5 + 0.5,
          cos(time * 0.5 + dist * 6.0 + 1.0) * 0.5 + 0.5
        );

        vec3 finalColor = mix(color1, color2, wave1) * wave2;
        finalColor += smoothstep(0.5, 0.0, dist) * 0.3;

        gl_FragColor = vec4(finalColor, 0.6);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vs || !fs) return null;

    const program = gl.createProgram();
    if (!program) return null;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error');
      return null;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    return {
      gl,
      program,
      timeLoc: gl.getUniformLocation(program, 'time'),
      resLoc: gl.getUniformLocation(program, 'resolution'),
      mouseLoc: gl.getUniformLocation(program, 'mouse')
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Force canvas size immediately
    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);

    const ctx = initCanvas(canvas);
    if (!ctx) return;

    const { gl, timeLoc, resLoc, mouseLoc } = ctx;

    let mouseX = 0.5, mouseY = 0.5;
    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = 1 - e.clientY / window.innerHeight;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('resize', handleResize);

    const start = Date.now();
    let animId: number;

    const render = () => {
      const time = (Date.now() - start) / 1000;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(timeLoc, time);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform2f(mouseLoc, mouseX, mouseY);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [initCanvas]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        pointerEvents: 'none'
      }}
    />
  );
}

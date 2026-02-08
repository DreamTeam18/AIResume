#!/bin/bash
# Script to check Claude Code usage limits
# This script checks if Claude Code API usage is back on track

# Set environment variables
export ANTHROPIC_BASE_URL=http://localhost:18789
export ANTHROPIC_AUTH_TOKEN=32efa489d9ffd6d875da7b8432e776292adc718622e45131

# Function to check Claude Code status
check_claude_status() {
    # Try to make a simple API call to check if Claude Code is working
    response=$(curl -s -X POST "http://localhost:18789/v1/models" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $ANTHROPIC_AUTH_TOKEN" \
        -d '{"prompt": "Hello, are you working? Please respond with 'I am working' if you are ready."}' 2>/dev/null)
    
    # Check if response contains expected content
    if echo "$response" | grep -q "I am working"; then
        echo "Claude Code is working properly"
        return 0
    else
        echo "Claude Code may have usage limits or is not responding properly"
        return 1
    fi
}

# Function to send Telegram notification
notify_telegram() {
    message="$1"
    # Use curl to send message to Telegram bot
    curl -s -X POST "https://api.telegram.org/bot8422208192:AAFNaCi2Lbj_xz49rvdQMoCiu5rhxN8FYQM/sendMessage" \
        -H "Content-Type: application/json" \
        -d "{\"chat_id\": \"7387741860\", \"text\": \"$message\"}" >/dev/null
}

# Main script logic
echo "Checking Claude Code usage status at $(date)"

# Check Claude Code status
if check_claude_status; then
    echo "Claude Code is working properly"
    # Check if we need to notify about usage being back on track
    # This would require tracking previous status, which we'll implement next
else
    echo "Claude Code may have usage limits"
    # Send notification about potential usage limits
    notify_telegram "Claude Code usage check: Service may have usage limits or is not responding properly. Will check again in 1 hour."
fi
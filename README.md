# Claude Token Usage Tracker

A simple Node.js application that makes a test call to Claude AI and displays the token usage statistics.

## Prerequisites

- Node.js (v18 or higher)
- An Anthropic API key

## Setup Instructions

### 1. Install Dependencies

First, navigate to your project directory and install the required packages:

```bash
npm install
```

This will install:

- `@anthropic-ai/sdk` - The Anthropic API client
- `dotenv` - For environment variable management

### 2. Configure Your API Key

Create a `.env` file in the project root and add your Anthropic API key:

```bash
ANTHROPIC_API_KEY=your-actual-api-key-here
```

**To get your API key:**

1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Navigate to "API Keys" in the settings
4. Create a new API key
5. Copy and paste it into your `.env` file

**Important:** Never commit your `.env` file to version control. It's already included in `.gitignore`.

## Running the Application

While in the project root, execute the script with:

```bash
node src/index.js
```

## What It Does

The application will:

1. Send a test prompt to Claude (Claude Sonnet 4.5)
2. Receive a response
3. Display the response text
4. Show token usage statistics:
   - Input tokens (tokens in your prompt)
   - Output tokens (tokens in Claude's response)
   - Total tokens used

## Example Output

```
🤖 Making a test call to Claude...

📝 Response: The International Space Station travels at about 17,500 miles per hour, completing an orbit around Earth every 90 minutes.

📊 Token Usage:
   Input tokens:  15
   Output tokens: 28
   Total tokens:  43
```

## Customizing the Prompt

To test with different prompts, edit the prompt in `src/index.js`:

```javascript
const result = await callLLM("Your custom prompt here");
```

## File Structure

```
project-root/
├── package.json          # Node.js dependencies and scripts
├── .env                  # Your API key (not in git)
├── .gitignore           # Files to ignore in git
├── README.md            # This file
└── src/
    ├── index.js         # Main entry point
    └── llmCall.js       # LLM API call handler
```

## Troubleshooting

### "Cannot find module '@anthropic-ai/sdk'"

Run `npm install` to install dependencies.

### "Error: Missing required parameter: 'apiKey'"

Make sure your `.env` file exists and contains a valid API key.

### "401 Unauthorized"

Your API key may be invalid or expired. Generate a new one from the Anthropic console.

## API Costs

Each API call uses tokens and costs money based on Anthropic's pricing. Monitor your usage at https://console.anthropic.com/

Current pricing (as of January 2025):

- Claude Sonnet 4.5: Check https://www.anthropic.com/pricing for latest rates

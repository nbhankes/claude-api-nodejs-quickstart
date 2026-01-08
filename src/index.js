console.log('Script starting...');
import 'dotenv/config';
import { callLLM } from './callLLM.js';

async function main() {
  console.log('🤖 Making a test call to Claude...\n');

  try {
    const result = await callLLM('Tell me a fun fact about space in one sentence.');
    
    console.log('📝 Response:', result.response);
    console.log('\n📊 Token Usage:');
    console.log(`   Input tokens:  ${result.usage.input_tokens}`);
    console.log(`   Output tokens: ${result.usage.output_tokens}`);
    console.log(`   Total tokens:  ${result.usage.input_tokens + result.usage.output_tokens}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
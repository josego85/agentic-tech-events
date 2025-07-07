import { searchGoogle } from './services/searchGoogle';
import { filterFutureEvents } from './utils/eventFilter';

class Agentic {
  objective: string;

  constructor(objective: string) {
    this.objective = objective;
  }

  async execute() {
    console.log(`🤖 Starting agent...\n🧠 Objective: ${this.objective}\n`);

    const query = 'tech events Berlin July 2025 site:eventbrite.com OR site:10times.com OR site:meetup.com';
    console.log(`🔍 Searching: "${query}"\n`);

    const results = await searchGoogle(query);

    if (!results.length) {
      console.error('❌ No results found.');
      return;
    }

    const today = new Date();
    const futureResults = filterFutureEvents(results, today);

    if (!futureResults.length) {
      console.log('ℹ️ No upcoming events found.');
      return;
    }

    console.log('📋 Upcoming events:\n');
    futureResults.forEach((r: any, i: number) => {
      console.log(`${i + 1}. ${r.title}`);
      console.log(`   ${r.link}`);
      console.log(`   ${r.snippet}\n`);
    });
  }
}

// Instantiate and run the agent
const objective = 'Find technology events in Berlin during July 2025 and display the results directly.';
const agent = new Agentic(objective);

agent.execute();

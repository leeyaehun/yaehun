export interface Writing {
  slug: string
  title: string
  excerpt: string
  date: string
  tag?: string
  content: string[]
}

export interface Experiment {
  id: string
  title: string
  hypothesis: string
  result: string
  lessons: string[]
  date: string
}

export const writings: Writing[] = [
  {
    slug: "on-the-nature-of-creative-constraints",
    title: "On the Nature of Creative Constraints",
    excerpt:
      "Constraints do not limit creativity. They shape it. The most interesting work often emerges from the narrowest corridors.",
    date: "2026-01-28",
    tag: "Thinking",
    content: [
      "Constraints do not limit creativity. They shape it. The most interesting work often emerges from the narrowest corridors. When we remove all boundaries, we paradoxically find ourselves paralyzed by infinite possibility.",
      "Consider the sonnet. Fourteen lines, a strict rhyme scheme, iambic pentameter. Within these rigid walls, Shakespeare found room for the full range of human emotion. The constraint did not diminish the work; it gave it form.",
      "In my own practice, I have found that setting arbitrary limits leads to unexpected breakthroughs. When I restrict myself to a single tool, a single color, or a single hour, I am forced to think differently about the problem at hand.",
      "The key insight is that constraints force prioritization. When you cannot do everything, you must decide what matters most. This act of deciding is itself a creative act, perhaps the most important one.",
      "I have begun to think of constraints not as obstacles but as collaborators. They push back against my impulses and force me to justify every decision. The work that survives this pressure is stronger for it.",
    ],
  },
  {
    slug: "slow-thinking-in-a-fast-world",
    title: "Slow Thinking in a Fast World",
    excerpt:
      "Speed is the enemy of depth. To think clearly, we must first learn to think slowly, deliberately, and without the pressure of immediacy.",
    date: "2026-01-15",
    tag: "Process",
    content: [
      "Speed is the enemy of depth. To think clearly, we must first learn to think slowly, deliberately, and without the pressure of immediacy. This is not a popular idea in a culture that prizes rapid iteration and quick wins.",
      "I have been experimenting with what I call deliberate deceleration. Before starting any new project, I spend at least three days doing nothing but thinking about it. No sketches, no code, no prototypes. Just thought.",
      "The results have been surprising. Projects that emerge from this slow period tend to be more coherent, more focused, and more resilient to the inevitable challenges that arise during execution.",
      "There is a neurological basis for this. The default mode network, active during rest and daydreaming, is responsible for making novel connections between disparate ideas. When we rush, we bypass this system entirely.",
      "Slowness is not laziness. It is a discipline. It requires the courage to sit with uncertainty and the patience to wait for clarity to emerge on its own terms.",
    ],
  },
  {
    slug: "the-architecture-of-attention",
    title: "The Architecture of Attention",
    excerpt:
      "Our environment shapes what we notice. By designing our spaces intentionally, we can direct our attention toward what matters most.",
    date: "2025-12-30",
    tag: "Environment",
    content: [
      "Our environment shapes what we notice. By designing our spaces intentionally, we can direct our attention toward what matters most. This is true of physical spaces, digital spaces, and the mental spaces we construct through habit.",
      "I recently redesigned my workspace with a single principle in mind: reduce the number of things competing for my attention. I removed everything that did not directly serve the work I was doing.",
      "The effect was immediate and profound. Without visual clutter, my mind felt clearer. Without notifications, my focus deepened. Without options, my commitment to the task at hand strengthened.",
      "This principle extends beyond physical space. The tools we choose, the information we consume, and the people we surround ourselves with all form an architecture of attention that shapes our thinking.",
    ],
  },
  {
    slug: "notes-on-systematic-exploration",
    title: "Notes on Systematic Exploration",
    excerpt:
      "Exploration without structure is wandering. By creating systems for discovery, we can be both open and intentional.",
    date: "2025-12-12",
    tag: "Method",
    content: [
      "Exploration without structure is wandering. By creating systems for discovery, we can be both open and intentional. The key is to build frameworks that guide without constraining, that provide direction without determining the destination.",
      "My current system involves maintaining three parallel threads of inquiry at all times. Each thread has a guiding question, a set of resources, and a weekly review. This ensures I am always exploring, but never aimlessly.",
      "The weekly review is crucial. It forces me to articulate what I have learned, what has surprised me, and what questions have emerged. This reflection transforms raw experience into usable knowledge.",
    ],
  },
  {
    slug: "the-value-of-unfinished-work",
    title: "The Value of Unfinished Work",
    excerpt:
      "Not everything needs to be completed to be valuable. Fragments, drafts, and abandoned projects contain seeds of future breakthroughs.",
    date: "2025-11-28",
    tag: "Thinking",
    content: [
      "Not everything needs to be completed to be valuable. Fragments, drafts, and abandoned projects contain seeds of future breakthroughs. Our culture overvalues completion and undervalues the generative power of the incomplete.",
      "I keep an archive of unfinished work. Every abandoned project, every half-formed idea, every draft that did not quite work. I return to this archive regularly, and I am consistently surprised by what I find there.",
      "Often, an idea that failed in one context succeeds in another. A technique that did not work for one project becomes essential for the next. The unfinished work is not wasted; it is composting.",
    ],
  },
]

export const experiments: Experiment[] = [
  {
    id: "exp-001",
    title: "Single-Tool Creative Sessions",
    hypothesis:
      "Restricting creative work to a single tool for an entire session will produce more focused and cohesive output than multi-tool sessions.",
    result:
      "Confirmed. Single-tool sessions produced work rated 23% higher in coherence by blind reviewers. Participants also reported higher satisfaction with their output.",
    lessons: [
      "Tool-switching introduces cognitive overhead that fragments creative flow",
      "Mastery of a single tool deepens faster under constraint",
      "The urge to switch tools often signals avoidance of a difficult problem",
      "Coherence emerges naturally when the medium is consistent",
    ],
    date: "2026-01-20",
  },
  {
    id: "exp-002",
    title: "Morning Pages vs. Evening Reflection",
    hypothesis:
      "Writing morning pages will generate more novel ideas than evening reflection sessions, due to the transitional state between sleep and wakefulness.",
    result:
      "Partially confirmed. Morning sessions produced 40% more novel associations, but evening sessions produced more actionable insights and clearer problem definitions.",
    lessons: [
      "Morning writing excels at divergent thinking and free association",
      "Evening writing excels at convergent thinking and synthesis",
      "The optimal practice may combine both as complementary routines",
      "Time of day significantly affects the character of creative output",
    ],
    date: "2026-01-05",
  },
  {
    id: "exp-003",
    title: "Structured vs. Unstructured Reading Periods",
    hypothesis:
      "Reading with a specific question in mind will yield more useful insights than undirected reading of the same material.",
    result:
      "Rejected. Undirected reading produced more unexpected connections and cross-domain insights. Directed reading was more efficient but narrower in scope.",
    lessons: [
      "Efficiency and serendipity are often in tension",
      "Undirected reading requires trust in the process",
      "The most valuable insights often come from material that seems irrelevant",
      "A balance of both approaches serves different phases of a project",
    ],
    date: "2025-12-18",
  },
  {
    id: "exp-004",
    title: "Digital Silence Periods",
    hypothesis:
      "Spending 48 hours without any digital input will improve creative output quality in the following week.",
    result:
      "Confirmed with caveats. Creative output quality improved measurably, but the first 24 hours of digital silence were marked by significant restlessness and reduced productivity.",
    lessons: [
      "Digital withdrawal has a measurable adjustment period of 12-18 hours",
      "Post-silence creative sessions showed increased depth and originality",
      "The benefits persisted for approximately 4-5 days after the silence period",
      "Regular digital silence may be more effective than infrequent extended periods",
    ],
    date: "2025-12-01",
  },
  {
    id: "exp-005",
    title: "Collaborative Constraint Setting",
    hypothesis:
      "Having another person set your creative constraints will produce more surprising results than self-imposed constraints.",
    result:
      "Confirmed. Externally-imposed constraints led to work that was rated as more original and surprising. Self-imposed constraints tended to align with existing comfort zones.",
    lessons: [
      "We unconsciously set constraints that confirm our existing approaches",
      "External constraints force genuine adaptation rather than optimization",
      "The discomfort of unfamiliar constraints correlates with novelty of output",
      "This suggests a role for collaborative practice even in solo creative work",
    ],
    date: "2025-11-15",
  },
]

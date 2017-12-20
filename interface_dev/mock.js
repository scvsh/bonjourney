project = { 
    id: null,
    title: null, // Just title
    description: null, // Description, 1-2 paragraphs
    preview: null, // Can be uploaded or created automatically from the first task result
    status: null, // New/Active/Suspended/Archived
    master: null, // Project creator 
    players: [], // Developers
    creationDate: null, // Filled automatically
    deadLine: null, // Filled by master
    budget: null, // Estimated price (just an advice, money flows from the tasks itslef)
    progress: null // Measured from child tasks completeness
    tasks: [] // Children
}

task = { // Core system element, cannot be divided
    id: null,
    title: null, // Task title
    brief: null,
    startTime: null,
    finishTime: null, // Calculated from priceDecay
    tags: [], // Task profile 
    basePrice: null,
    priceMultiplier, // Additional pay for speed
    priceMultiplierDecay: null, // Multiplier decrease speed
    status: null, // New/Active/In review/Approved
    inputs: [], // Input task ids
    outputs: [],
    player: null, // Person responsible
    project: null, // Parent project
}



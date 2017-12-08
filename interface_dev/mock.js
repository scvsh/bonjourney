project = {
    title: null, // Just title
    description: null, // Description, 1-2 paragraphs
    preview: null, // Can be uploaded or created automatically from the first task result
    tags: [], // Project profile, to restrict children tasks profiles
    status: null, // New/Active/Suspended/Archived

    master: null, // Project creator 
    peers: [], // Developers

    creationDate: null, // Filled automatically
    deadLine: null, // Filled by master
    budget: null, // Estimated price (just an advice, money flows from the tasks itslef)
    progress: null // Measured from child tasks completeness
    tasks: [] // Children
}

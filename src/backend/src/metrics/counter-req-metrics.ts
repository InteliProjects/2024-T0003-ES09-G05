import { Counter } from "prom-client";

export const reqCounters = {
    getResearchs: new Counter({
        name: 'get_researchs_total_request',
        help: 'The total number of reqs to get all research endpoint'
    }),
    getResearchById: new Counter({
        name: 'get_research_by_id_total_request',
        help: 'The total number of reqs to get one research endpoint'
    }),
    vote: new Counter({
        name: 'vote_total_request',
        help: 'The total number of reqs to vote endpoint'
    }),
    create: new Counter({
        name: 'create_research_total_request',
        help: 'The total number of reqs to create research endpoint'
    }),
    update: new Counter({
        name: 'update_research_total_request',
        help: 'The total number of reqs to update research endpoint'
    }),
    distribute: new Counter({
        name: 'distribute_total_request',
        help: 'The total number of reqs to distribute endpoint'
    }),
}
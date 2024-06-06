import { Counter } from "prom-client";

export const errorCounters = {
    getResearchs: new Counter({
        name: 'get_researchs_error_total_request',
        help: 'The total number of reqs error to get all research endpoint'
    }),
    getResearchById: new Counter({
        name: 'get_research_by_id_error_total_request',
        help: 'The total number of reqs error to get one research endpoint'
    }),
    vote: new Counter({
        name: 'vote_error_total_request',
        help: 'The total number of reqs error to vote endpoint'
    }),
    create: new Counter({
        name: 'create_research_error_total_request',
        help: 'The total number of reqs error to create research endpoint'
    }),
    distribute: new Counter({
        name: 'distribute_error_total_request',
        help: 'The total number of reqs error to distribute endpoint'
    }),
}
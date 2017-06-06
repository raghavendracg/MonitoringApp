// Model for production elastic search result
interface Shards {
    total: number;
    successful: number;
    failed: number;
}

interface Hits {
    total: number;
    max_score: number;
    hits: any;
}

interface Api {
    took: number;
    timed_out: boolean;
    _shards: Shards;
    hits: Hits;
}

interface Result {
    Vendor: string;
    status: string;
    api: Api;
}

export interface MonitorModel {
    Result: Result[];
}


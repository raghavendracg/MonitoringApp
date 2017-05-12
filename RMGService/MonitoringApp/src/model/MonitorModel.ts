   interface Shards {
        total: number;
        successful: number;
        failed: number;
    }

    interface Hits {
        total: number;
        max_score: number;
        hits: any[];
    }

  export  interface Bucket2 {
        key: string;
        doc_count: number;
    }

  export  interface Responsecodes {
        doc_count_error_upper_bound: number;
        sum_other_doc_count: number;
        buckets: Bucket2[];
    }

    interface Bucket {
        key: string;
        doc_count: number;
        responsecodes: Responsecodes;
    }

    interface Words {
        doc_count_error_upper_bound: number;
        sum_other_doc_count: number;
        buckets: Bucket[];
    }

    interface Aggregations {
        words: Words;
    }

    export interface MonitorModel {
        took: number;
        timed_out: boolean;
        _shards: Shards;
        hits: Hits;
        aggregations: Aggregations;
    }
    







export interface service<T> {
    status: status;
    payload?: T;
    error?: string;
}

// string literal type
export type status = 
    'loading' |
    'loaded' |
    'failed'

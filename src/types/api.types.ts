export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  status: number;
  rateLimit?: {
    limit: number;
    remaining: number;
    reset: number;
  };
}

export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    from: number;
    to: number;
  };
}

export interface ApiRequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean | undefined>;
  signal?: AbortSignal;
}

export interface CacheConfig {
  strategy: 'cache-first' | 'network-first';
  maxAge: number;
  staleWhileRevalidate: boolean;
}

export interface ApiEndpoint {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  description: string;
  parameters?: {
    query?: Record<string, unknown>;
    body?: Record<string, unknown>;
  };
  responses: {
    [key: number]: {
      description: string;
      schema: Record<string, unknown>;
    };
  };
}
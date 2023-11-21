export interface ILinks {
    delegate: string;
    website: string;
    inflation: string;
}

export interface IService {
    binary_name: string;

    main_dir: string; //Например: canto
    working_dir: string; //Например: cantod

    valoper_address: string;
    download_binary_command: string;
}

export interface IPrice {
    denom: string;
    denom_exponent: number;

    ticker: string;
    cg_ticker: string;
}

export interface IEndpoints {
    api: boolean;
    rpc: boolean;
    grpc: boolean;
    json_rpc: boolean;
}

export interface INetwork {
    id: number;
    name: string;
    type: string;
    description: string;
    logo: string;

    links: ILinks;
    service: IService;
    price: IPrice;
    endpoints: IEndpoints;
}
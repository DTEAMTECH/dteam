export interface IChainId {
    result: {
        peers: [ { node_info: { network: string } } ]
    }

}

export interface INodeVersion {
    result: {
        response: {
            version: string
        }
    }
}

export interface TendermintParams {
    id: number,
    chainId: string,
    nodeVersion: string
}
import {ContractId, PriceAmount, TokenId} from "../types";

export interface BuyTokenParams {
    tokenId: TokenId,
    contractId: ContractId,
    price: PriceAmount
}
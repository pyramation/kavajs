import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const kavaAminoConverters: {
    "/kava.swap.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, tokenA, tokenB, slippage, deadline }: import("./swap/v1beta1/tx").MsgDeposit) => {
            depositor: string;
            token_a: {
                denom: string;
                amount: string;
            };
            token_b: {
                denom: string;
                amount: string;
            };
            slippage: string;
            deadline: string;
        };
        fromAmino: ({ depositor, token_a, token_b, slippage, deadline }: {
            depositor: string;
            token_a: {
                denom: string;
                amount: string;
            };
            token_b: {
                denom: string;
                amount: string;
            };
            slippage: string;
            deadline: string;
        }) => import("./swap/v1beta1/tx").MsgDeposit;
    };
    "/kava.swap.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ from, shares, minTokenA, minTokenB, deadline }: import("./swap/v1beta1/tx").MsgWithdraw) => {
            from: string;
            shares: string;
            min_token_a: {
                denom: string;
                amount: string;
            };
            min_token_b: {
                denom: string;
                amount: string;
            };
            deadline: string;
        };
        fromAmino: ({ from, shares, min_token_a, min_token_b, deadline }: {
            from: string;
            shares: string;
            min_token_a: {
                denom: string;
                amount: string;
            };
            min_token_b: {
                denom: string;
                amount: string;
            };
            deadline: string;
        }) => import("./swap/v1beta1/tx").MsgWithdraw;
    };
    "/kava.swap.v1beta1.MsgSwapExactForTokens": {
        aminoType: string;
        toAmino: ({ requester, exactTokenA, tokenB, slippage, deadline }: import("./swap/v1beta1/tx").MsgSwapExactForTokens) => {
            requester: string;
            exact_token_a: {
                denom: string;
                amount: string;
            };
            token_b: {
                denom: string;
                amount: string;
            };
            slippage: string;
            deadline: string;
        };
        fromAmino: ({ requester, exact_token_a, token_b, slippage, deadline }: {
            requester: string;
            exact_token_a: {
                denom: string;
                amount: string;
            };
            token_b: {
                denom: string;
                amount: string;
            };
            slippage: string;
            deadline: string;
        }) => import("./swap/v1beta1/tx").MsgSwapExactForTokens;
    };
    "/kava.swap.v1beta1.MsgSwapForExactTokens": {
        aminoType: string;
        toAmino: ({ requester, tokenA, exactTokenB, slippage, deadline }: import("./swap/v1beta1/tx").MsgSwapForExactTokens) => {
            requester: string;
            token_a: {
                denom: string;
                amount: string;
            };
            exact_token_b: {
                denom: string;
                amount: string;
            };
            slippage: string;
            deadline: string;
        };
        fromAmino: ({ requester, token_a, exact_token_b, slippage, deadline }: {
            requester: string;
            token_a: {
                denom: string;
                amount: string;
            };
            exact_token_b: {
                denom: string;
                amount: string;
            };
            slippage: string;
            deadline: string;
        }) => import("./swap/v1beta1/tx").MsgSwapForExactTokens;
    };
    "/kava.savings.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, amount }: import("./savings/v1beta1/tx").MsgDeposit) => {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ depositor, amount }: {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./savings/v1beta1/tx").MsgDeposit;
    };
    "/kava.savings.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ depositor, amount }: import("./savings/v1beta1/tx").MsgWithdraw) => {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ depositor, amount }: {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./savings/v1beta1/tx").MsgWithdraw;
    };
    "/kava.router.v1beta1.MsgMintDeposit": {
        aminoType: string;
        toAmino: ({ depositor, validator, amount }: import("./router/v1beta1/tx").MsgMintDeposit) => {
            depositor: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ depositor, validator, amount }: {
            depositor: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./router/v1beta1/tx").MsgMintDeposit;
    };
    "/kava.router.v1beta1.MsgDelegateMintDeposit": {
        aminoType: string;
        toAmino: ({ depositor, validator, amount }: import("./router/v1beta1/tx").MsgDelegateMintDeposit) => {
            depositor: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ depositor, validator, amount }: {
            depositor: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./router/v1beta1/tx").MsgDelegateMintDeposit;
    };
    "/kava.router.v1beta1.MsgWithdrawBurn": {
        aminoType: string;
        toAmino: ({ from, validator, amount }: import("./router/v1beta1/tx").MsgWithdrawBurn) => {
            from: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ from, validator, amount }: {
            from: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./router/v1beta1/tx").MsgWithdrawBurn;
    };
    "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
        aminoType: string;
        toAmino: ({ from, validator, amount }: import("./router/v1beta1/tx").MsgWithdrawBurnUndelegate) => {
            from: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ from, validator, amount }: {
            from: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./router/v1beta1/tx").MsgWithdrawBurnUndelegate;
    };
    "/kava.pricefeed.v1beta1.MsgPostPrice": {
        aminoType: string;
        toAmino: ({ from, marketId, price, expiry }: import("./pricefeed/v1beta1/tx").MsgPostPrice) => {
            from: string;
            market_id: string;
            price: string;
            expiry: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ from, market_id, price, expiry }: {
            from: string;
            market_id: string;
            price: string;
            expiry: {
                seconds: string;
                nanos: number;
            };
        }) => import("./pricefeed/v1beta1/tx").MsgPostPrice;
    };
    "/kava.liquid.v1beta1.MsgMintDerivative": {
        aminoType: string;
        toAmino: ({ sender, validator, amount }: import("./liquid/v1beta1/tx").MsgMintDerivative) => {
            sender: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, validator, amount }: {
            sender: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./liquid/v1beta1/tx").MsgMintDerivative;
    };
    "/kava.liquid.v1beta1.MsgBurnDerivative": {
        aminoType: string;
        toAmino: ({ sender, validator, amount }: import("./liquid/v1beta1/tx").MsgBurnDerivative) => {
            sender: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, validator, amount }: {
            sender: string;
            validator: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./liquid/v1beta1/tx").MsgBurnDerivative;
    };
    "/kava.issuance.v1beta1.MsgIssueTokens": {
        aminoType: string;
        toAmino: ({ sender, tokens, receiver }: import("./issuance/v1beta1/tx").MsgIssueTokens) => {
            sender: string;
            tokens: {
                denom: string;
                amount: string;
            };
            receiver: string;
        };
        fromAmino: ({ sender, tokens, receiver }: {
            sender: string;
            tokens: {
                denom: string;
                amount: string;
            };
            receiver: string;
        }) => import("./issuance/v1beta1/tx").MsgIssueTokens;
    };
    "/kava.issuance.v1beta1.MsgRedeemTokens": {
        aminoType: string;
        toAmino: ({ sender, tokens }: import("./issuance/v1beta1/tx").MsgRedeemTokens) => {
            sender: string;
            tokens: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, tokens }: {
            sender: string;
            tokens: {
                denom: string;
                amount: string;
            };
        }) => import("./issuance/v1beta1/tx").MsgRedeemTokens;
    };
    "/kava.issuance.v1beta1.MsgBlockAddress": {
        aminoType: string;
        toAmino: ({ sender, denom, blockedAddress }: import("./issuance/v1beta1/tx").MsgBlockAddress) => {
            sender: string;
            denom: string;
            blocked_address: string;
        };
        fromAmino: ({ sender, denom, blocked_address }: {
            sender: string;
            denom: string;
            blocked_address: string;
        }) => import("./issuance/v1beta1/tx").MsgBlockAddress;
    };
    "/kava.issuance.v1beta1.MsgUnblockAddress": {
        aminoType: string;
        toAmino: ({ sender, denom, blockedAddress }: import("./issuance/v1beta1/tx").MsgUnblockAddress) => {
            sender: string;
            denom: string;
            blocked_address: string;
        };
        fromAmino: ({ sender, denom, blocked_address }: {
            sender: string;
            denom: string;
            blocked_address: string;
        }) => import("./issuance/v1beta1/tx").MsgUnblockAddress;
    };
    "/kava.issuance.v1beta1.MsgSetPauseStatus": {
        aminoType: string;
        toAmino: ({ sender, denom, status }: import("./issuance/v1beta1/tx").MsgSetPauseStatus) => {
            sender: string;
            denom: string;
            status: boolean;
        };
        fromAmino: ({ sender, denom, status }: {
            sender: string;
            denom: string;
            status: boolean;
        }) => import("./issuance/v1beta1/tx").MsgSetPauseStatus;
    };
    "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
        aminoType: string;
        toAmino: ({ sender, multiplierName }: import("./incentive/v1beta1/tx").MsgClaimUSDXMintingReward) => {
            sender: string;
            multiplier_name: string;
        };
        fromAmino: ({ sender, multiplier_name }: {
            sender: string;
            multiplier_name: string;
        }) => import("./incentive/v1beta1/tx").MsgClaimUSDXMintingReward;
    };
    "/kava.incentive.v1beta1.MsgClaimHardReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: import("./incentive/v1beta1/tx").MsgClaimHardReward) => {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        };
        fromAmino: ({ sender, denoms_to_claim }: {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        }) => import("./incentive/v1beta1/tx").MsgClaimHardReward;
    };
    "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: import("./incentive/v1beta1/tx").MsgClaimDelegatorReward) => {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        };
        fromAmino: ({ sender, denoms_to_claim }: {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        }) => import("./incentive/v1beta1/tx").MsgClaimDelegatorReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSwapReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: import("./incentive/v1beta1/tx").MsgClaimSwapReward) => {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        };
        fromAmino: ({ sender, denoms_to_claim }: {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        }) => import("./incentive/v1beta1/tx").MsgClaimSwapReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: import("./incentive/v1beta1/tx").MsgClaimSavingsReward) => {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        };
        fromAmino: ({ sender, denoms_to_claim }: {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        }) => import("./incentive/v1beta1/tx").MsgClaimSavingsReward;
    };
    "/kava.incentive.v1beta1.MsgClaimEarnReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: import("./incentive/v1beta1/tx").MsgClaimEarnReward) => {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        };
        fromAmino: ({ sender, denoms_to_claim }: {
            sender: string;
            denoms_to_claim: {
                denom: string;
                multiplier_name: string;
            }[];
        }) => import("./incentive/v1beta1/tx").MsgClaimEarnReward;
    };
    "/kava.hard.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, amount }: import("./hard/v1beta1/tx").MsgDeposit) => {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ depositor, amount }: {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./hard/v1beta1/tx").MsgDeposit;
    };
    "/kava.hard.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ depositor, amount }: import("./hard/v1beta1/tx").MsgWithdraw) => {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ depositor, amount }: {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./hard/v1beta1/tx").MsgWithdraw;
    };
    "/kava.hard.v1beta1.MsgBorrow": {
        aminoType: string;
        toAmino: ({ borrower, amount }: import("./hard/v1beta1/tx").MsgBorrow) => {
            borrower: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ borrower, amount }: {
            borrower: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./hard/v1beta1/tx").MsgBorrow;
    };
    "/kava.hard.v1beta1.MsgRepay": {
        aminoType: string;
        toAmino: ({ sender, owner, amount }: import("./hard/v1beta1/tx").MsgRepay) => {
            sender: string;
            owner: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ sender, owner, amount }: {
            sender: string;
            owner: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./hard/v1beta1/tx").MsgRepay;
    };
    "/kava.hard.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: ({ keeper, borrower }: import("./hard/v1beta1/tx").MsgLiquidate) => {
            keeper: string;
            borrower: string;
        };
        fromAmino: ({ keeper, borrower }: {
            keeper: string;
            borrower: string;
        }) => import("./hard/v1beta1/tx").MsgLiquidate;
    };
    "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
        aminoType: string;
        toAmino: ({ initiator, receiver, amount }: import("./evmutil/v1beta1/tx").MsgConvertCoinToERC20) => {
            initiator: string;
            receiver: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ initiator, receiver, amount }: {
            initiator: string;
            receiver: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./evmutil/v1beta1/tx").MsgConvertCoinToERC20;
    };
    "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
        aminoType: string;
        toAmino: ({ initiator, receiver, kavaErc20Address, amount }: import("./evmutil/v1beta1/tx").MsgConvertERC20ToCoin) => {
            initiator: string;
            receiver: string;
            kava_erc20_address: string;
            amount: string;
        };
        fromAmino: ({ initiator, receiver, kava_erc20_address, amount }: {
            initiator: string;
            receiver: string;
            kava_erc20_address: string;
            amount: string;
        }) => import("./evmutil/v1beta1/tx").MsgConvertERC20ToCoin;
    };
    "/kava.earn.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, amount, strategy }: import("./earn/v1beta1/tx").MsgDeposit) => {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            };
            strategy: number;
        };
        fromAmino: ({ depositor, amount, strategy }: {
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            };
            strategy: number;
        }) => import("./earn/v1beta1/tx").MsgDeposit;
    };
    "/kava.earn.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ from, amount, strategy }: import("./earn/v1beta1/tx").MsgWithdraw) => {
            from: string;
            amount: {
                denom: string;
                amount: string;
            };
            strategy: number;
        };
        fromAmino: ({ from, amount, strategy }: {
            from: string;
            amount: {
                denom: string;
                amount: string;
            };
            strategy: number;
        }) => import("./earn/v1beta1/tx").MsgWithdraw;
    };
    "/kava.committee.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ pubProposal, proposer, committeeId }: import("./committee/v1beta1/tx").MsgSubmitProposal) => {
            pub_proposal: {
                type_url: string;
                value: Uint8Array;
            };
            proposer: string;
            committee_id: string;
        };
        fromAmino: ({ pub_proposal, proposer, committee_id }: {
            pub_proposal: {
                type_url: string;
                value: Uint8Array;
            };
            proposer: string;
            committee_id: string;
        }) => import("./committee/v1beta1/tx").MsgSubmitProposal;
    };
    "/kava.committee.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, voteType }: import("./committee/v1beta1/tx").MsgVote) => {
            proposal_id: string;
            voter: string;
            vote_type: number;
        };
        fromAmino: ({ proposal_id, voter, vote_type }: {
            proposal_id: string;
            voter: string;
            vote_type: number;
        }) => import("./committee/v1beta1/tx").MsgVote;
    };
    "/kava.cdp.v1beta1.MsgCreateCDP": {
        aminoType: string;
        toAmino: ({ sender, collateral, principal, collateralType }: import("./cdp/v1beta1/tx").MsgCreateCDP) => {
            sender: string;
            collateral: {
                denom: string;
                amount: string;
            };
            principal: {
                denom: string;
                amount: string;
            };
            collateral_type: string;
        };
        fromAmino: ({ sender, collateral, principal, collateral_type }: {
            sender: string;
            collateral: {
                denom: string;
                amount: string;
            };
            principal: {
                denom: string;
                amount: string;
            };
            collateral_type: string;
        }) => import("./cdp/v1beta1/tx").MsgCreateCDP;
    };
    "/kava.cdp.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, owner, collateral, collateralType }: import("./cdp/v1beta1/tx").MsgDeposit) => {
            depositor: string;
            owner: string;
            collateral: {
                denom: string;
                amount: string;
            };
            collateral_type: string;
        };
        fromAmino: ({ depositor, owner, collateral, collateral_type }: {
            depositor: string;
            owner: string;
            collateral: {
                denom: string;
                amount: string;
            };
            collateral_type: string;
        }) => import("./cdp/v1beta1/tx").MsgDeposit;
    };
    "/kava.cdp.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ depositor, owner, collateral, collateralType }: import("./cdp/v1beta1/tx").MsgWithdraw) => {
            depositor: string;
            owner: string;
            collateral: {
                denom: string;
                amount: string;
            };
            collateral_type: string;
        };
        fromAmino: ({ depositor, owner, collateral, collateral_type }: {
            depositor: string;
            owner: string;
            collateral: {
                denom: string;
                amount: string;
            };
            collateral_type: string;
        }) => import("./cdp/v1beta1/tx").MsgWithdraw;
    };
    "/kava.cdp.v1beta1.MsgDrawDebt": {
        aminoType: string;
        toAmino: ({ sender, collateralType, principal }: import("./cdp/v1beta1/tx").MsgDrawDebt) => {
            sender: string;
            collateral_type: string;
            principal: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, collateral_type, principal }: {
            sender: string;
            collateral_type: string;
            principal: {
                denom: string;
                amount: string;
            };
        }) => import("./cdp/v1beta1/tx").MsgDrawDebt;
    };
    "/kava.cdp.v1beta1.MsgRepayDebt": {
        aminoType: string;
        toAmino: ({ sender, collateralType, payment }: import("./cdp/v1beta1/tx").MsgRepayDebt) => {
            sender: string;
            collateral_type: string;
            payment: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, collateral_type, payment }: {
            sender: string;
            collateral_type: string;
            payment: {
                denom: string;
                amount: string;
            };
        }) => import("./cdp/v1beta1/tx").MsgRepayDebt;
    };
    "/kava.cdp.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: ({ keeper, borrower, collateralType }: import("./cdp/v1beta1/tx").MsgLiquidate) => {
            keeper: string;
            borrower: string;
            collateral_type: string;
        };
        fromAmino: ({ keeper, borrower, collateral_type }: {
            keeper: string;
            borrower: string;
            collateral_type: string;
        }) => import("./cdp/v1beta1/tx").MsgLiquidate;
    };
    "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
        aminoType: string;
        toAmino: ({ from, to, recipientOtherChain, senderOtherChain, randomNumberHash, timestamp, amount, heightSpan }: import("./bep3/v1beta1/tx").MsgCreateAtomicSwap) => {
            from: string;
            to: string;
            recipient_other_chain: string;
            sender_other_chain: string;
            random_number_hash: string;
            timestamp: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            height_span: string;
        };
        fromAmino: ({ from, to, recipient_other_chain, sender_other_chain, random_number_hash, timestamp, amount, height_span }: {
            from: string;
            to: string;
            recipient_other_chain: string;
            sender_other_chain: string;
            random_number_hash: string;
            timestamp: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            height_span: string;
        }) => import("./bep3/v1beta1/tx").MsgCreateAtomicSwap;
    };
    "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
        aminoType: string;
        toAmino: ({ from, swapId, randomNumber }: import("./bep3/v1beta1/tx").MsgClaimAtomicSwap) => {
            from: string;
            swap_id: string;
            random_number: string;
        };
        fromAmino: ({ from, swap_id, random_number }: {
            from: string;
            swap_id: string;
            random_number: string;
        }) => import("./bep3/v1beta1/tx").MsgClaimAtomicSwap;
    };
    "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
        aminoType: string;
        toAmino: ({ from, swapId }: import("./bep3/v1beta1/tx").MsgRefundAtomicSwap) => {
            from: string;
            swap_id: string;
        };
        fromAmino: ({ from, swap_id }: {
            from: string;
            swap_id: string;
        }) => import("./bep3/v1beta1/tx").MsgRefundAtomicSwap;
    };
    "/kava.auction.v1beta1.MsgPlaceBid": {
        aminoType: string;
        toAmino: ({ auctionId, bidder, amount }: import("./auction/v1beta1/tx").MsgPlaceBid) => {
            auction_id: string;
            bidder: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ auction_id, bidder, amount }: {
            auction_id: string;
            bidder: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./auction/v1beta1/tx").MsgPlaceBid;
    };
};
export declare const kavaProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningKavaClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningKavaClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;

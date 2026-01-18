pragma solidity ^0.8.30;

import {Test} from "../lib/forge-std/src/Test.sol";
import {console} from "../lib/forge-std/src/console.sol";
import {HyperCore} from "../lib/hyper-evm-lib/test/simulation/HyperCore.sol";
import {CoreSimulatorLib} from "../lib/hyper-evm-lib/test/simulation/CoreSimulatorLib.sol";
import {CoreWriterLib} from "../lib/hyper-evm-lib/src/CoreWriterLib.sol";
import {PrecompileLib} from "../lib/hyper-evm-lib/src/PrecompileLib.sol";
import {HLConversions} from "../lib/hyper-evm-lib/src/common/HLConversions.sol";
import {HLConstants} from "../lib/hyper-evm-lib/src/common/HLConstants.sol";
import {L1Read} from "./utils/L1Read.sol";

contract PerpAccountMarginSummaryTest is Test {
    HyperCore hyperCore;
    L1Read l1Read;

    uint16 constant ETH_PERP = 1;
    address constant ETH_HYPER_EVM = 0xBe6727B535545C67d5cAa73dEa54865B92CF7907;

    address user = makeAddr("user");

    function setUp() public {
        vm.createSelectFork("https://rpc.hyperliquid.xyz/evm", 20808290);

        hyperCore = CoreSimulatorLib.init();
        l1Read = new L1Read();

        CoreSimulatorLib.forceAccountActivation(user);
        //CoreSimulatorLib.forcePerpBalance(user, 1000000e6);

        //        CoreSimulatorLib.forcePerpLeverage(user, ETH_PERP, 10);
    }

    function test_VerifyUSDC() public {
        // Check token 0 info
        L1Read.TokenInfo memory info = l1Read.tokenInfo(0);
        emit log_named_string("Token 0 Name", info.name);
        console.log("token 0 evmExtraWei decimals", info.evmExtraWeiDecimals);
        console.log("token 0 sz decimals", info.szDecimals);
        console.log("token 0 wei decimals", info.weiDecimals);

        // Check perp 0 (usually BTC)
        L1Read.PerpAssetInfo memory perp = l1Read.perpAssetInfo(0);
        emit log_named_string("Perp 0 Coin", perp.coin);
    }

    function test_VerifyETH() public {
        // Check token 0 info
        L1Read.TokenInfo memory info = l1Read.tokenInfo(221);
        emit log_named_string("Token 0 Name", info.name);
        console.log("token 0 evmExtraWei decimals", info.evmExtraWeiDecimals);
        console.log("token 0 sz decimals", info.szDecimals);
        console.log("token 0 wei decimals", info.weiDecimals);

        // Check perp 0 (usually BTC)
        L1Read.PerpAssetInfo memory perp = l1Read.perpAssetInfo(0);
        emit log_named_string("Perp 0 Coin", perp.coin);
    }

    function test_VerifySOL() public {
        // Check token 0 info
        L1Read.TokenInfo memory info = l1Read.tokenInfo(254);
        emit log_named_string("Token 0 Name", info.name);
        console.log("token 0 evmExtraWei decimals", info.evmExtraWeiDecimals);
        console.log("token 0 sz decimals", info.szDecimals);
        console.log("token 0 wei decimals", info.weiDecimals);

        // Check perp 0 (usually BTC)
        L1Read.PerpAssetInfo memory perp = l1Read.perpAssetInfo(0);
        emit log_named_string("Perp 0 Coin", perp.coin);
    }

    function test_VerifyBTC() public {
        // Check token 0 info
        L1Read.TokenInfo memory info = l1Read.tokenInfo(197);
        emit log_named_string("Token 0 Name", info.name);
        console.log("token 0 evmExtraWei decimals", info.evmExtraWeiDecimals);
        console.log("token 0 sz decimals", info.szDecimals);
        console.log("token 0 wei decimals", info.weiDecimals);

        // Check perp 0 (usually BTC)
        L1Read.PerpAssetInfo memory perp = l1Read.perpAssetInfo(0);
        emit log_named_string("Perp 0 Coin", perp.coin);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IMyToken {
    function initialize(string memory _name, string memory _symbol) external;

    function pause() external;

    function unpause() external;

    function mint(address to, uint256 amount) external;

    function burnToken(address to, uint256 amount) external;
}
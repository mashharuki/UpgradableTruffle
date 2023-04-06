// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IDNS {
    function initialize() external;

    function register(string calldata name, string calldata did, address to) external;

    function getAddress(string calldata name) external;

    function setRecord(string calldata name, string calldata record) external;

    function getRecord(string calldata name) external;

    function isOwner() external;

    function getAllNames() external;

    function valid(string calldata name) external;
}
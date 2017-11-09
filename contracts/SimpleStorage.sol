pragma solidity ^0.4.2;

contract SimpleStorage {
  uint storedData;

  function set(uint x) {
    storedData = x*2;
  }

  function get() constant returns (uint) {
    return storedData;
  }
}

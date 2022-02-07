// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SVGNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    event CreatedSVGNFT(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("SVG NFT", "svgNFT")
    {
        tokenCounter = 0;
    }

    function create(string memory svg) public onlyOwner {
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(tokenCounter, svg);
        tokenCounter = tokenCounter + 1;
        emit CreatedSVGNFT(tokenCounter, svg);
    }
    

}

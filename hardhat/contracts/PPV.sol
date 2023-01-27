// SPDX-License-Identifier: Unlincensed

pragma solidity ^0.8.4;

error InsufficientAmount();
error TransactionIncomplete();

contract PPV {
    //address to timestamp
    mapping(address => uint256) userAccessTime;

    //Contract Owner
    address immutable owner;

    constructor() {
        owner = msg.sender;
    }

    //Video details struct
    //name, id, hash (cid)
    struct FileDetails {
        string name;
        string fileHash;
        string coverHash;
    }
    //id mapped to details
    mapping(uint256 => FileDetails) files;
    uint256 total;

    // Add accesss time to user.
    function addAccessTime(address user) external payable {
        if (msg.value != 100) revert InsufficientAmount();

        (bool isPaid, ) = owner.call{value: msg.value}("");
        if (isPaid == false) revert TransactionIncomplete();
        userAccessTime[user] = block.timestamp;
    }

    //Fetch the users available access time.
    function getAccessTime(address user) external view returns (uint256) {
        return userAccessTime[user];
    }

    //Add video details.
    function addFileDetails(
        string memory _name,
        string memory _fileHash,
        string memory _coverHash
    ) external {
        total++;
        files[total] = FileDetails(_name, _fileHash, _coverHash);
    }

    //Fetch all files.
    function getAllFiles() external view returns (FileDetails[] memory) {
        FileDetails[] memory result = new FileDetails[](total);
        for (uint256 i = 1; i <= total; i++) {
            FileDetails memory details = files[i];
            result[i - 1] = details;
        }
        return result;
        //Resultant index is one lesser so access plus one on front end
    }

    //Get a specific file.
    function getFile(uint256 id) external view returns (FileDetails memory) {
        return files[id];
    }
}

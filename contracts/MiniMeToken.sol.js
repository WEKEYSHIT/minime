/* This is an autogenerated file. DO NOT EDIT MANUALLY */

exports.ApproveAndCallFallBackAbi = [{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_token","type":"address"},{"name":"_data","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"type":"function"}];
exports.ApproveAndCallFallBackByteCode = "0x";
exports.ControlledAbi = [{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
exports.ControlledByteCode = "0x6060604052341561000c57fe5b5b60008054600160a060020a03191633600160a060020a03161790555b5b60f1806100386000396000f300606060405263ffffffff60e060020a6000350416633cebb8238114602a578063f77c4791146045575bfe5b3415603157fe5b6043600160a060020a0360043516606e565b005b3415604c57fe5b605260b6565b60408051600160a060020a039092168252519081900360200190f35b60005433600160a060020a0390811691161460895760006000fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b600054600160a060020a0316815600a165627a7a72305820afeb5545274ca4317ec44d4525823f3d79743065ab8e01f14af8215fc5b2d9bc0029";
exports.MiniMeTokenAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"creationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_blockNumber","type":"uint256"}],"name":"balanceOfAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_cloneTokenName","type":"string"},{"name":"_cloneDecimalUnits","type":"uint8"},{"name":"_cloneTokenSymbol","type":"string"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"parentToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"generateTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_blockNumber","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"parentSnapShotBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroyTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenFactory","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_transfersEnabled","type":"bool"}],"name":"enableTransfers","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_tokenFactory","type":"address"},{"name":"_parentToken","type":"address"},{"name":"_parentSnapShotBlock","type":"uint256"},{"name":"_tokenName","type":"string"},{"name":"_decimalUnits","type":"uint8"},{"name":"_tokenSymbol","type":"string"},{"name":"_transfersEnabled","type":"bool"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_cloneToken","type":"address"},{"indexed":false,"name":"_snapshotBlock","type":"uint256"}],"name":"NewCloneToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"}];
exports.MiniMeTokenByteCode = "0x60a0604052600760608190527f4d4d545f302e3100000000000000000000000000000000000000000000000000608090815262000040916004919062000146565b5034156200004a57fe5b60405162001b6838038062001b6883398101604090815281516020830151918301516060840151608085015160a086015160c0870151949693949284019391929101905b5b60008054600160a060020a03191633600160a060020a03161790555b600b805461010060a860020a031916610100600160a060020a038a16021790558351620000e090600190602087019062000146565b506002805460ff191660ff851617905581516200010590600390602085019062000146565b5060058054600160a060020a031916600160a060020a0388161790556006859055600b805460ff1916821515179055436007555b50505050505050620001f0565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200018957805160ff1916838001178555620001b9565b82800160010185558215620001b9579182015b82811115620001b95782518255916020019190600101906200019c565b5b50620001c8929150620001cc565b5090565b620001ed91905b80821115620001c85760008155600101620001d3565b5090565b90565b61196880620002006000396000f300606060405236156101225763ffffffff60e060020a60003504166306fdde0381146101e1578063095ea7b31461027157806317634514146102a457806318160ddd146102c657806323b872dd146102e8578063313ce567146103215780633cebb823146103475780634ee2cd7e1461036557806354fd4d50146103965780636638c0871461042657806370a08231146104e657806380a5400114610514578063827f32c01461054057806395d89b4114610573578063981b24d014610603578063a9059cbb14610628578063bef97c871461065b578063c5bcc4f11461067f578063cae9ca51146106a1578063d3ce77fe14610718578063dd62ed3e1461074b578063e77772fe1461077f578063f41e60c5146107ab578063f77c4791146107c2575b6101df5b60005461013b90600160a060020a03166107ee565b156101d657600080546040805160209081019390935280517ff48c3054000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301529151919092169263f48c30549234926024808301939282900301818588803b15156101ad57fe5b61235a5a03f115156101bb57fe5b505060405151151591506101d190505760006000fd5b6101dc565b60006000fd5b5b565b005b34156101e957fe5b6101f161081b565b604080516020808252835181830152835191928392908301918501908083838215610237575b80518252602083111561023757601f199092019160209182019101610217565b505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561027957fe5b610290600160a060020a03600435166024356108a8565b604080519115158252519081900360200190f35b34156102ac57fe5b6102b4610a19565b60408051918252519081900360200190f35b34156102ce57fe5b6102b4610a1f565b60408051918252519081900360200190f35b34156102f057fe5b610290600160a060020a0360043581169060243516604435610a30565b604080519115158252519081900360200190f35b341561032957fe5b610331610ad3565b6040805160ff9092168252519081900360200190f35b341561034f57fe5b6101df600160a060020a0360043516610adc565b005b341561036d57fe5b6102b4600160a060020a0360043516602435610b25565b60408051918252519081900360200190f35b341561039e57fe5b6101f1610c82565b604080516020808252835181830152835191928392908301918501908083838215610237575b80518252602083111561023757601f199092019160209182019101610217565b505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561042e57fe5b6104ca600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989a60ff8b35169a909994019750919550918201935091508190840183828082843750949650508435946020013515159350610d1092505050565b60408051600160a060020a039092168252519081900360200190f35b34156104ee57fe5b6102b4600160a060020a0360043516610f70565b60408051918252519081900360200190f35b341561051c57fe5b6104ca610f84565b60408051600160a060020a039092168252519081900360200190f35b341561054857fe5b610290600160a060020a0360043516602435610f93565b604080519115158252519081900360200190f35b341561057b57fe5b6101f161104d565b604080516020808252835181830152835191928392908301918501908083838215610237575b80518252602083111561023757601f199092019160209182019101610217565b505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561060b57fe5b6102b46004356110db565b60408051918252519081900360200190f35b341561063057fe5b610290600160a060020a03600435166024356111eb565b604080519115158252519081900360200190f35b341561066357fe5b610290611214565b604080519115158252519081900360200190f35b341561068757fe5b6102b461121d565b60408051918252519081900360200190f35b34156106a957fe5b604080516020600460443581810135601f8101849004840285018401909552848452610290948235600160a060020a031694602480359560649492939190920191819084018382808284375094965061122395505050505050565b604080519115158252519081900360200190f35b341561072057fe5b610290600160a060020a0360043516602435611390565b604080519115158252519081900360200190f35b341561075357fe5b6102b4600160a060020a0360043581169060243516611465565b60408051918252519081900360200190f35b341561078757fe5b6104ca611492565b60408051600160a060020a039092168252519081900360200190f35b34156107b357fe5b6101df60043515156114a6565b005b34156107ca57fe5b6104ca6114d5565b60408051600160a060020a039092168252519081900360200190f35b600080600160a060020a038316151561080a5760009150610815565b823b90506000811191505b50919050565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108a05780601f10610875576101008083540402835291602001916108a0565b820191906000526020600020905b81548152906001019060200180831161088357829003601f168201915b505050505081565b600b5460009060ff1615156108bd5760006000fd5b81158015906108f05750600160a060020a0333811660009081526009602090815260408083209387168352929052205415155b156108fb5760006000fd5b60005461091090600160a060020a03166107ee565b156109b1576000805460408051602090810184905281517fda682aeb000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301528881166024830152604482018890529251929093169363da682aeb9360648082019492918390030190829087803b151561099057fe5b60325a03f1151561099d57fe5b505060405151151590506109b15760006000fd5b5b600160a060020a03338116600081815260096020908152604080832094881680845294825291829020869055815186815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060015b92915050565b60075481565b6000610a2a436110db565b90505b90565b6000805433600160a060020a03908116911614610abe57600b5460ff161515610a595760006000fd5b600160a060020a038085166000908152600960209081526040808320339094168352929052205482901015610a9057506000610acc565b600160a060020a03808516600090815260096020908152604080832033909416835292905220805483900390555b610ac98484846114e4565b90505b9392505050565b60025460ff1681565b60005433600160a060020a03908116911614610af85760006000fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b6000600754821015610b3957506000610a13565b600160a060020a0383166000908152600860205260409020541580610b995750600160a060020a038316600090815260086020526040812080548492908110610b7e57fe5b906000526020600020900160005b50546001608060020a0316115b15610c5157600554600160a060020a031615610c4457600554600654604080516000602091820181905282517f4ee2cd7e000000000000000000000000000000000000000000000000000000008152600160a060020a038981166004830152602482019590955292519390941693634ee2cd7e936044808501949192918390030190829087803b1515610c2857fe5b60325a03f11515610c3557fe5b5050604051519150610a139050565b506000610a13565b610a13565b600160a060020a0383166000908152600860205260409020610c7390836116ac565b9050610a13565b5b5b92915050565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108a05780601f10610875576101008083540402835291602001916108a0565b820191906000526020600020905b81548152906001019060200180831161088357829003601f168201915b505050505081565b6000600043841115610d20574393505b600b60019054906101000a9004600160a060020a0316600160a060020a0316635b7b72c130868a8a8a896000604051602001526040518763ffffffff1660e060020a0281526004018087600160a060020a0316600160a060020a03168152602001868152602001806020018560ff1660ff1681526020018060200184151515158152602001838103835287818151815260200191508051906020019080838360008314610de8575b805182526020831115610de857601f199092019160209182019101610dc8565b505050905090810190601f168015610e145780820380516001836020036101000a031916815260200191505b5083810382528551815285516020918201918701908083838215610e53575b805182526020831115610e5357601f199092019160209182019101610e33565b505050905090810190601f168015610e7f5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b1515610ea057fe5b60325a03f11515610ead57fe5b50506040805180517f3cebb823000000000000000000000000000000000000000000000000000000008252600160a060020a03338116600484015292519094509184169250633cebb82391602480830192600092919082900301818387803b1515610f1457fe5b60325a03f11515610f2157fe5b5050604080518681529051600160a060020a03841692507f086c875b377f900b07ce03575813022f05dd10ed7640b5282cf6d3c3fc352ade9181900360200190a28091505b5095945050505050565b6000610f7c8243610b25565b90505b919050565b600554600160a060020a031681565b600080548190819033600160a060020a03908116911614610fb45760006000fd5b610fbf600a436116ac565b9150610fce600a858401611808565b610fd785610f70565b600160a060020a0386166000908152600860205260409020909150610ffe90858301611808565b604080518581529051600160a060020a038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600192505b5b505092915050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108a05780601f10610875576101008083540402835291602001916108a0565b820191906000526020600020905b81548152906001019060200180831161088357829003601f168201915b505050505081565b60006007548210156110ef57506000610f7f565b600a541580611125575081600a600081548110151561110a57fe5b906000526020600020900160005b50546001608060020a0316115b156111d257600554600160a060020a0316156111c557600554600654604080516000602091820181905282517f981b24d000000000000000000000000000000000000000000000000000000000815260048101949094529151600160a060020a039094169363981b24d093602480820194918390030190829087803b15156111a957fe5b60325a03f115156111b657fe5b5050604051519150610f7f9050565b506000610f7f565b610f7f565b6111dd600a836116ac565b9050610f7f565b5b5b919050565b600b5460009060ff1615156112005760006000fd5b61120b3384846114e4565b90505b92915050565b600b5460ff1681565b60065481565b600160a060020a03338116600081815260096020908152604080832094881680845294825280832087905580518781529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a383600160a060020a0316638f4ffcb1338530866040518563ffffffff1660e060020a0281526004018085600160a060020a0316600160a060020a0316815260200184815260200183600160a060020a0316600160a060020a031681526020018060200182810382528381815181526020019150805190602001908083836000831461132a575b80518252602083111561132a57601f19909201916020918201910161130a565b505050905090810190601f1680156113565780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b151561137457fe5b60325a03f1151561138157fe5b505050600190505b9392505050565b600080548190819033600160a060020a039081169116146113b15760006000fd5b6113bc600a436116ac565b9150838210156113cc5760006000fd5b6113d9600a858403611808565b6113e285610f70565b9050838110156113f25760006000fd5b600160a060020a038516600090815260086020526040902061141690858303611808565b604080518581529051600091600160a060020a038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600192505b5b505092915050565b600160a060020a038083166000908152600960209081526040808320938516835292905220545b92915050565b600b546101009004600160a060020a031681565b60005433600160a060020a039081169116146114c25760006000fd5b600b805460ff19168215151790555b5b50565b600054600160a060020a031681565b600080808315156114f857600192506116a3565b600160a060020a038516158061151f575030600160a060020a031685600160a060020a0316145b1561152a5760006000fd5b6115348643610b25565b91508382101561154757600092506116a3565b60005461155c90600160a060020a03166107ee565b156115fd576000805460408051602090810184905281517f4a393149000000000000000000000000000000000000000000000000000000008152600160a060020a038b811660048301528a81166024830152604482018a905292519290931693634a3931499360648082019492918390030190829087803b15156115dc57fe5b60325a03f115156115e957fe5b505060405151151590506115fd5760006000fd5b5b600160a060020a038616600090815260086020526040902061162290858403611808565b61162c8543610b25565b600160a060020a038616600090815260086020526040902090915061165390858301611808565b84600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a3600192505b50509392505050565b60006000600060008580549050600014156116ca57600093506117ff565b8554869060001981019081106116dc57fe5b906000526020600020900160005b50546001608060020a031685106117345785548690600019810190811061170d57fe5b906000526020600020900160005b5054608060020a90046001608060020a031693506117ff565b85600081548110151561174357fe5b906000526020600020900160005b50546001608060020a031685101561176c57600093506117ff565b8554600093506000190191505b828211156117ce5760026001838501015b04905084868281548110151561179c57fe5b906000526020600020900160005b50546001608060020a0316116117c2578092506117c9565b6001810391505b611779565b85838154811015156117dc57fe5b906000526020600020900160005b5054608060020a90046001608060020a031693505b50505092915050565b8154600090819015806118455750835443908590600019810190811061182a57fe5b906000526020600020900160005b50546001608060020a0316105b156118ae578354849061185b82600183016118f1565b8154811061186557fe5b906000526020600020900160005b5080546001608060020a03858116608060020a024382166fffffffffffffffffffffffffffffffff19909316929092171617815591506118ea565b8354849060001981019081106118c057fe5b906000526020600020900160005b5080546001608060020a03808616608060020a02911617815590505b5b50505050565b8154818355818115116119155760008381526020902061191591810190830161191b565b5b505050565b610a2d91905b808211156119355760008155600101611921565b5090565b905600a165627a7a72305820be63afdf6ebdcb97622986e3508fa936abecff3d455ee1683d9ae6ed14321d100029";
exports.MiniMeTokenFactoryAbi = [{"constant":false,"inputs":[{"name":"_parentToken","type":"address"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_tokenName","type":"string"},{"name":"_decimalUnits","type":"uint8"},{"name":"_tokenSymbol","type":"string"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"}];
exports.MiniMeTokenFactoryByteCode = "0x6060604052341561000c57fe5b5b611e4c8061001c6000396000f300606060405263ffffffff60e060020a6000350416635b7b72c18114610021575bfe5b341561002957fe5b604080516020600460443581810135601f81018490048402850184019095528484526100cd948235600160a060020a031694602480359560649492939190920191819084018382808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989a60ff8b35169a9099940197509195509182019350915081908401838280828437509496505050509135151591506100e99050565b60408051600160a060020a039092168252519081900360200190f35b60006000308888888888886100fc6102a8565b600160a060020a03808916825287166020808301919091526040820187905260ff8516608083015282151560c083015260e0606083018181528751918401919091528651909160a0840191610100850191890190808383821561017a575b80518252602083111561017a57601f19909201916020918201910161015a565b505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838382156101e5575b8051825260208311156101e557601f1990920191602091820191016101c5565b505050905090810190601f1680156102115780820380516001836020036101000a031916815260200191505b509950505050505050505050604051809103906000f080151561023057fe5b905080600160a060020a0316633cebb823336040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050600060405180830381600087803b151561028957fe5b60325a03f1151561029657fe5b5050508091505b509695505050505050565b604051611b68806102b983390190560060a0604052600760608190527f4d4d545f302e3100000000000000000000000000000000000000000000000000608090815262000040916004919062000146565b5034156200004a57fe5b60405162001b6838038062001b6883398101604090815281516020830151918301516060840151608085015160a086015160c0870151949693949284019391929101905b5b60008054600160a060020a03191633600160a060020a03161790555b600b805461010060a860020a031916610100600160a060020a038a16021790558351620000e090600190602087019062000146565b506002805460ff191660ff851617905581516200010590600390602085019062000146565b5060058054600160a060020a031916600160a060020a0388161790556006859055600b805460ff1916821515179055436007555b50505050505050620001f0565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200018957805160ff1916838001178555620001b9565b82800160010185558215620001b9579182015b82811115620001b95782518255916020019190600101906200019c565b5b50620001c8929150620001cc565b5090565b620001ed91905b80821115620001c85760008155600101620001d3565b5090565b90565b61196880620002006000396000f300606060405236156101225763ffffffff60e060020a60003504166306fdde0381146101e1578063095ea7b31461027157806317634514146102a457806318160ddd146102c657806323b872dd146102e8578063313ce567146103215780633cebb823146103475780634ee2cd7e1461036557806354fd4d50146103965780636638c0871461042657806370a08231146104e657806380a5400114610514578063827f32c01461054057806395d89b4114610573578063981b24d014610603578063a9059cbb14610628578063bef97c871461065b578063c5bcc4f11461067f578063cae9ca51146106a1578063d3ce77fe14610718578063dd62ed3e1461074b578063e77772fe1461077f578063f41e60c5146107ab578063f77c4791146107c2575b6101df5b60005461013b90600160a060020a03166107ee565b156101d657600080546040805160209081019390935280517ff48c3054000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301529151919092169263f48c30549234926024808301939282900301818588803b15156101ad57fe5b61235a5a03f115156101bb57fe5b505060405151151591506101d190505760006000fd5b6101dc565b60006000fd5b5b565b005b34156101e957fe5b6101f161081b565b604080516020808252835181830152835191928392908301918501908083838215610237575b80518252602083111561023757601f199092019160209182019101610217565b505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561027957fe5b610290600160a060020a03600435166024356108a8565b604080519115158252519081900360200190f35b34156102ac57fe5b6102b4610a19565b60408051918252519081900360200190f35b34156102ce57fe5b6102b4610a1f565b60408051918252519081900360200190f35b34156102f057fe5b610290600160a060020a0360043581169060243516604435610a30565b604080519115158252519081900360200190f35b341561032957fe5b610331610ad3565b6040805160ff9092168252519081900360200190f35b341561034f57fe5b6101df600160a060020a0360043516610adc565b005b341561036d57fe5b6102b4600160a060020a0360043516602435610b25565b60408051918252519081900360200190f35b341561039e57fe5b6101f1610c82565b604080516020808252835181830152835191928392908301918501908083838215610237575b80518252602083111561023757601f199092019160209182019101610217565b505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561042e57fe5b6104ca600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989a60ff8b35169a909994019750919550918201935091508190840183828082843750949650508435946020013515159350610d1092505050565b60408051600160a060020a039092168252519081900360200190f35b34156104ee57fe5b6102b4600160a060020a0360043516610f70565b60408051918252519081900360200190f35b341561051c57fe5b6104ca610f84565b60408051600160a060020a039092168252519081900360200190f35b341561054857fe5b610290600160a060020a0360043516602435610f93565b604080519115158252519081900360200190f35b341561057b57fe5b6101f161104d565b604080516020808252835181830152835191928392908301918501908083838215610237575b80518252602083111561023757601f199092019160209182019101610217565b505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561060b57fe5b6102b46004356110db565b60408051918252519081900360200190f35b341561063057fe5b610290600160a060020a03600435166024356111eb565b604080519115158252519081900360200190f35b341561066357fe5b610290611214565b604080519115158252519081900360200190f35b341561068757fe5b6102b461121d565b60408051918252519081900360200190f35b34156106a957fe5b604080516020600460443581810135601f8101849004840285018401909552848452610290948235600160a060020a031694602480359560649492939190920191819084018382808284375094965061122395505050505050565b604080519115158252519081900360200190f35b341561072057fe5b610290600160a060020a0360043516602435611390565b604080519115158252519081900360200190f35b341561075357fe5b6102b4600160a060020a0360043581169060243516611465565b60408051918252519081900360200190f35b341561078757fe5b6104ca611492565b60408051600160a060020a039092168252519081900360200190f35b34156107b357fe5b6101df60043515156114a6565b005b34156107ca57fe5b6104ca6114d5565b60408051600160a060020a039092168252519081900360200190f35b600080600160a060020a038316151561080a5760009150610815565b823b90506000811191505b50919050565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108a05780601f10610875576101008083540402835291602001916108a0565b820191906000526020600020905b81548152906001019060200180831161088357829003601f168201915b505050505081565b600b5460009060ff1615156108bd5760006000fd5b81158015906108f05750600160a060020a0333811660009081526009602090815260408083209387168352929052205415155b156108fb5760006000fd5b60005461091090600160a060020a03166107ee565b156109b1576000805460408051602090810184905281517fda682aeb000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301528881166024830152604482018890529251929093169363da682aeb9360648082019492918390030190829087803b151561099057fe5b60325a03f1151561099d57fe5b505060405151151590506109b15760006000fd5b5b600160a060020a03338116600081815260096020908152604080832094881680845294825291829020869055815186815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060015b92915050565b60075481565b6000610a2a436110db565b90505b90565b6000805433600160a060020a03908116911614610abe57600b5460ff161515610a595760006000fd5b600160a060020a038085166000908152600960209081526040808320339094168352929052205482901015610a9057506000610acc565b600160a060020a03808516600090815260096020908152604080832033909416835292905220805483900390555b610ac98484846114e4565b90505b9392505050565b60025460ff1681565b60005433600160a060020a03908116911614610af85760006000fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b6000600754821015610b3957506000610a13565b600160a060020a0383166000908152600860205260409020541580610b995750600160a060020a038316600090815260086020526040812080548492908110610b7e57fe5b906000526020600020900160005b50546001608060020a0316115b15610c5157600554600160a060020a031615610c4457600554600654604080516000602091820181905282517f4ee2cd7e000000000000000000000000000000000000000000000000000000008152600160a060020a038981166004830152602482019590955292519390941693634ee2cd7e936044808501949192918390030190829087803b1515610c2857fe5b60325a03f11515610c3557fe5b5050604051519150610a139050565b506000610a13565b610a13565b600160a060020a0383166000908152600860205260409020610c7390836116ac565b9050610a13565b5b5b92915050565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108a05780601f10610875576101008083540402835291602001916108a0565b820191906000526020600020905b81548152906001019060200180831161088357829003601f168201915b505050505081565b6000600043841115610d20574393505b600b60019054906101000a9004600160a060020a0316600160a060020a0316635b7b72c130868a8a8a896000604051602001526040518763ffffffff1660e060020a0281526004018087600160a060020a0316600160a060020a03168152602001868152602001806020018560ff1660ff1681526020018060200184151515158152602001838103835287818151815260200191508051906020019080838360008314610de8575b805182526020831115610de857601f199092019160209182019101610dc8565b505050905090810190601f168015610e145780820380516001836020036101000a031916815260200191505b5083810382528551815285516020918201918701908083838215610e53575b805182526020831115610e5357601f199092019160209182019101610e33565b505050905090810190601f168015610e7f5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b1515610ea057fe5b60325a03f11515610ead57fe5b50506040805180517f3cebb823000000000000000000000000000000000000000000000000000000008252600160a060020a03338116600484015292519094509184169250633cebb82391602480830192600092919082900301818387803b1515610f1457fe5b60325a03f11515610f2157fe5b5050604080518681529051600160a060020a03841692507f086c875b377f900b07ce03575813022f05dd10ed7640b5282cf6d3c3fc352ade9181900360200190a28091505b5095945050505050565b6000610f7c8243610b25565b90505b919050565b600554600160a060020a031681565b600080548190819033600160a060020a03908116911614610fb45760006000fd5b610fbf600a436116ac565b9150610fce600a858401611808565b610fd785610f70565b600160a060020a0386166000908152600860205260409020909150610ffe90858301611808565b604080518581529051600160a060020a038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600192505b5b505092915050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108a05780601f10610875576101008083540402835291602001916108a0565b820191906000526020600020905b81548152906001019060200180831161088357829003601f168201915b505050505081565b60006007548210156110ef57506000610f7f565b600a541580611125575081600a600081548110151561110a57fe5b906000526020600020900160005b50546001608060020a0316115b156111d257600554600160a060020a0316156111c557600554600654604080516000602091820181905282517f981b24d000000000000000000000000000000000000000000000000000000000815260048101949094529151600160a060020a039094169363981b24d093602480820194918390030190829087803b15156111a957fe5b60325a03f115156111b657fe5b5050604051519150610f7f9050565b506000610f7f565b610f7f565b6111dd600a836116ac565b9050610f7f565b5b5b919050565b600b5460009060ff1615156112005760006000fd5b61120b3384846114e4565b90505b92915050565b600b5460ff1681565b60065481565b600160a060020a03338116600081815260096020908152604080832094881680845294825280832087905580518781529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a383600160a060020a0316638f4ffcb1338530866040518563ffffffff1660e060020a0281526004018085600160a060020a0316600160a060020a0316815260200184815260200183600160a060020a0316600160a060020a031681526020018060200182810382528381815181526020019150805190602001908083836000831461132a575b80518252602083111561132a57601f19909201916020918201910161130a565b505050905090810190601f1680156113565780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b151561137457fe5b60325a03f1151561138157fe5b505050600190505b9392505050565b600080548190819033600160a060020a039081169116146113b15760006000fd5b6113bc600a436116ac565b9150838210156113cc5760006000fd5b6113d9600a858403611808565b6113e285610f70565b9050838110156113f25760006000fd5b600160a060020a038516600090815260086020526040902061141690858303611808565b604080518581529051600091600160a060020a038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600192505b5b505092915050565b600160a060020a038083166000908152600960209081526040808320938516835292905220545b92915050565b600b546101009004600160a060020a031681565b60005433600160a060020a039081169116146114c25760006000fd5b600b805460ff19168215151790555b5b50565b600054600160a060020a031681565b600080808315156114f857600192506116a3565b600160a060020a038516158061151f575030600160a060020a031685600160a060020a0316145b1561152a5760006000fd5b6115348643610b25565b91508382101561154757600092506116a3565b60005461155c90600160a060020a03166107ee565b156115fd576000805460408051602090810184905281517f4a393149000000000000000000000000000000000000000000000000000000008152600160a060020a038b811660048301528a81166024830152604482018a905292519290931693634a3931499360648082019492918390030190829087803b15156115dc57fe5b60325a03f115156115e957fe5b505060405151151590506115fd5760006000fd5b5b600160a060020a038616600090815260086020526040902061162290858403611808565b61162c8543610b25565b600160a060020a038616600090815260086020526040902090915061165390858301611808565b84600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a3600192505b50509392505050565b60006000600060008580549050600014156116ca57600093506117ff565b8554869060001981019081106116dc57fe5b906000526020600020900160005b50546001608060020a031685106117345785548690600019810190811061170d57fe5b906000526020600020900160005b5054608060020a90046001608060020a031693506117ff565b85600081548110151561174357fe5b906000526020600020900160005b50546001608060020a031685101561176c57600093506117ff565b8554600093506000190191505b828211156117ce5760026001838501015b04905084868281548110151561179c57fe5b906000526020600020900160005b50546001608060020a0316116117c2578092506117c9565b6001810391505b611779565b85838154811015156117dc57fe5b906000526020600020900160005b5054608060020a90046001608060020a031693505b50505092915050565b8154600090819015806118455750835443908590600019810190811061182a57fe5b906000526020600020900160005b50546001608060020a0316105b156118ae578354849061185b82600183016118f1565b8154811061186557fe5b906000526020600020900160005b5080546001608060020a03858116608060020a024382166fffffffffffffffffffffffffffffffff19909316929092171617815591506118ea565b8354849060001981019081106118c057fe5b906000526020600020900160005b5080546001608060020a03808616608060020a02911617815590505b5b50505050565b8154818355818115116119155760008381526020902061191591810190830161191b565b5b505050565b610a2d91905b808211156119355760008155600101611921565b5090565b905600a165627a7a72305820be63afdf6ebdcb97622986e3508fa936abecff3d455ee1683d9ae6ed14321d100029a165627a7a72305820669ff69f628018a7a2e6d6d452b04f1979bae2b52f4f1673f2573ad57f02ba360029";
exports.TokenControllerAbi = [{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"onTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"onApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"proxyPayment","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"}];
exports.TokenControllerByteCode = "0x";

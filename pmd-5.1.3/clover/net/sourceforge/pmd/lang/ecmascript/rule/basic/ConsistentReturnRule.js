var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":38,"id":9888,"methods":[{"el":16,"sc":5,"sl":14},{"el":37,"sc":5,"sl":18}],"name":"ConsistentReturnRule","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_390":{"methods":[{"sl":14},{"sl":18}],"name":"testEcmascript","pass":true,"statements":[{"sl":15},{"sl":20},{"sl":21},{"sl":22},{"sl":24},{"sl":25},{"sl":26},{"sl":29},{"sl":36}]},"test_41":{"methods":[{"sl":14}],"name":"useEcmaScript","pass":true,"statements":[{"sl":15}]},"test_76":{"methods":[{"sl":14}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":15}]},"test_864":{"methods":[{"sl":14}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [76, 864, 390, 41], [76, 864, 390, 41], [], [], [390], [], [390], [390], [390], [], [390], [390], [390], [], [], [390], [], [], [], [], [], [], [390], [], []]

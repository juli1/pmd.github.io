var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":11,"id":9445,"methods":[{"el":10,"sc":5,"sl":8}],"name":"Java13Handler","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_128":{"methods":[{"sl":8}],"name":"testAssertAsIdentifierSucceedsWith1_3_test2","pass":true,"statements":[{"sl":9}]},"test_132":{"methods":[{"sl":8}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":9}]},"test_637":{"methods":[{"sl":8}],"name":"testAssertAsIdentifierSucceedsWith1_3","pass":true,"statements":[{"sl":9}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [128, 132, 637], [128, 132, 637], [], []]

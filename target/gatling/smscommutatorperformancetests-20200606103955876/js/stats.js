var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "231",
        "ok": "231",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4695",
        "ok": "4695",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "64819",
        "ok": "64819",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "46266",
        "ok": "46266",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11756",
        "ok": "11756",
        "ko": "-"
    },
    "percentiles1": {
        "total": "41430",
        "ok": "41430",
        "ko": "-"
    },
    "percentiles2": {
        "total": "58605",
        "ok": "58605",
        "ko": "-"
    },
    "percentiles3": {
        "total": "63292",
        "ok": "63292",
        "ko": "-"
    },
    "percentiles4": {
        "total": "64443",
        "ok": "64443",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 231,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.265",
        "ok": "2.265",
        "ko": "-"
    }
},
contents: {
"req_req-reply-testi-66d00": {
        type: "REQUEST",
        name: "req reply testing",
path: "req reply testing",
pathFormatted: "req_req-reply-testi-66d00",
stats: {
    "name": "req reply testing",
    "numberOfRequests": {
        "total": "231",
        "ok": "231",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4695",
        "ok": "4695",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "64819",
        "ok": "64819",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "46266",
        "ok": "46266",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11756",
        "ok": "11756",
        "ko": "-"
    },
    "percentiles1": {
        "total": "41430",
        "ok": "41430",
        "ko": "-"
    },
    "percentiles2": {
        "total": "58605",
        "ok": "58605",
        "ko": "-"
    },
    "percentiles3": {
        "total": "63292",
        "ok": "63292",
        "ko": "-"
    },
    "percentiles4": {
        "total": "64443",
        "ok": "64443",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 231,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.265",
        "ok": "2.265",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

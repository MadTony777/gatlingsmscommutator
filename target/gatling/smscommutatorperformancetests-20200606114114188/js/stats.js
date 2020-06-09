var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "124",
        "ok": "124",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1866",
        "ok": "1866",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "87919",
        "ok": "87919",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "58871",
        "ok": "58871",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10466",
        "ok": "10466",
        "ko": "-"
    },
    "percentiles1": {
        "total": "57849",
        "ok": "57849",
        "ko": "-"
    },
    "percentiles2": {
        "total": "60714",
        "ok": "60714",
        "ko": "-"
    },
    "percentiles3": {
        "total": "71854",
        "ok": "71854",
        "ko": "-"
    },
    "percentiles4": {
        "total": "87554",
        "ok": "87554",
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
    "count": 124,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.06",
        "ok": "1.06",
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
        "total": "124",
        "ok": "124",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1866",
        "ok": "1866",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "87919",
        "ok": "87919",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "58871",
        "ok": "58871",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10466",
        "ok": "10466",
        "ko": "-"
    },
    "percentiles1": {
        "total": "57849",
        "ok": "57849",
        "ko": "-"
    },
    "percentiles2": {
        "total": "60714",
        "ok": "60714",
        "ko": "-"
    },
    "percentiles3": {
        "total": "71854",
        "ok": "71854",
        "ko": "-"
    },
    "percentiles4": {
        "total": "87554",
        "ok": "87554",
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
    "count": 124,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.06",
        "ok": "1.06",
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

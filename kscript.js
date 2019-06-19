import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
    vus: 230,
    duration: "180s"
};

export default function() {
    let id = Math.floor(Math.random() * 10000000)
    // let res = http.get(`http://localhost:3000/${id}/reviews`);
    // check(res, {
    //     "success": (r) => r.status == 200
    // });
    let res2 = http.get(`http://localhost:3000/${id}/summary`);
    check(res2, {
        "success": (r) => r.status == 200
    });
};
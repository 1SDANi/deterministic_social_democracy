window.ai_turns = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    window.kpd_turn();

    if (Q.lvp_formed) {
        // TODO
    } else {
        window.ddp_turn();
    }

    if (Q.sapd_formed) {
        // TODO
    }

    if (Q.cvp_formed) {
        // TODO
    } else {
        window.z_turn();
    }

    if (!Q.lvp_formed || !Q.cvp_dvp_formed) {
        window.dvp_turn();
    }

    if (Q.kvp_formed && !Q.cvp_kvp_formed) {
        // TODO
    }

    if (Q.dnf_formed) {
        // TODO
    } else if (!Q.cvp_formed) {
        window.dnvp_turn();
    }

    if (Q.black_thursday_seen) {
        // TODO
    }
}

window.kpd_turn = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd turn');
    console.log('Q: ' + Q);
    console.log('labor minister party: ' + Q.labor_minister_party);
    if (Q.labor_minister_party == "KPD" && Q.labor_affairs_timer == 0 && Q.strike_term_seen == 0) {
        window.support_labor();
    } else if (Q.kpd_rally_timer <= 0) {
        window.kpd_rally();
    }
};

window.ddp_turn = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp turn');
    if (Q.labor_minister_party == Q.ddp_name && Q.labor_affairs_timer == 0 && Q.strike_term_seen == 0) {
        if (Q.ddp_ideology == "Left" && Q.ddp_leader == "Erkelenz") {
            window.support_labor();
        } else if (ddp_ideology == "Moderate") {
            if (Q.ddp_leader == "Heuss" || Q.ddp_leader == "Lemmer" || Q.ddp_leader == "Lüders") {
                window.labor_balance();
            } else {
                window.support_employers();
            }
        }
    } else if (Q.ddp_rally_timer <= 0) {
        window.ddp_rally();
    }
};

window.z_turn = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z turn');
    if (Q.labor_minister_party == Q.z_party_name && Q.labor_affairs_timer == 0 && Q.strike_term_seen == 0) {
        if ((Q.z_leader == "Wirth" && !(Q.dvp_in_government || Q.dnvp_in_government || Q.nsdap_in_government)) || (Q.z_leader == "Joos" && Q.spd_in_government && Q.peoples_party) || Q.z_leader == "Kaiser") {
            window.support_labor();
        } else if (Q.z_leader == "Adenauer" || Q.z_leader == "Marx" || Q.z_leader == "Stegerwald") {
            window.labor_balance();
        } else if (Q.z_leader == "Bracht" || Q.z_leader == "Kaas" || Q.z_leader == "Brüning") {
            window.support_employers();
        }
    }  else if (Q.z_rally_timer <= 0) {
        window.z_rally();
    }
}

window.dvp_turn = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp turn');
    if (Q.labor_minister_party == "DVP" && Q.labor_affairs_timer == 0 && Q.strike_term_seen == 0) {
        if (Q.dvp_ideology == "Left" && (Q.dvp_leader == "Stresemann" || Q.dvp_leader == "Thiel" || Q.dvp_leader == "zu Dohna-Schlodien" || Q.dvp_leader == "Glatzel")) {
            window.labor_balance();
        } else {
            window.support_employers();
        }
    } else if (Q.dvp_rally_timer <= 0) {
        window.dvp_rally();
    }
}

window.dnvp_turn = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp turn');
    if (Q.labor_minister_party == "DNVP" && Q.labor_affairs_timer == 0 && Q.strike_term_seen == 0) {
        if (Q.dnvp_leader == "Treviranus" || Q.dnvp_leader == "Lambach" || Q.dnvp_leader == "Lejeune-Jung") {
            window.labor_balance();
        } else if (Q.dnvp_leader == "Westarp" || Q.dnvp_leader == "Schiele" || Q.dnvp_leader == "Keudell" || Q.dnvp_leader == "Hergt" || Q.dnvp_leader == "Hugenberg" || Q.dnvp_leader == "Triumvirate") {
            window.support_employers();
        }
    } else if (Q.dnvp_rally_timer <= 0) {
        window.dnvp_rally();
    }
}
window.ai_turns = function() {
    window.kpd_turn();

    if (dendryUI.lvp_formed) {
        // TODO
    } else {
        window.ddp_turn();
    }

    if (dendryUI.sapd_formed) {
        // TODO
    }

    if (dendryUI.cvp_formed) {
        // TODO
    } else {
        window.z_turn();
    }

    if (!dendryUI.lvp_formed || !dendryUI.cvp_dvp_formed) {
        window.dvp_turn();
    }

    if (dendryUI.kvp_formed && !dendryUI.cvp_kvp_formed) {
        // TODO
    }

    if (dendryUI.dnf_formed) {
        // TODO
    } else if (!dendryUI.cvp_formed) {
        window.dnvp_turn();
    }

    if (dendryUI.black_thursday_seen) {
        // TODO
    }
}

window.kpd_turn = function() {
    if (dendryUI.labor_minister_party == "KPD" && dendryUI.labor_affairs_timer == 0 && dendryUI.strike_term_seen == 0) {
        window.support_labor();
    } else if (dendryUI.kpd_rally_timer <= 0) {
        window.kpd_rally();
    }
};

window.ddp_turn = function() {
    if (dendryUI.labor_minister_party == dendryUI.ddp_name && dendryUI.labor_affairs_timer == 0 && dendryUI.strike_term_seen == 0) {
        if (dendryUI.ddp_ideology == "Left" && dendryUI.ddp_leader == "Erkelenz") {
            window.support_labor();
        } else if (ddp_ideology == "Moderate") {
            if (dendryUI.ddp_leader == "Heuss" || dendryUI.ddp_leader == "Lemmer" || dendryUI.ddp_leader == "Lüders") {
                window.support_balance();
            } else {
                window.support_employers();
            }
        }
    } else if (dendryUI.ddp_rally_timer <= 0) {
        window.ddp_rally();
    }
};

window.z_turn = function() {
    if (dendryUI.labor_minister_party == dendryUI.z_party_name && dendryUI.labor_affairs_timer == 0 && dendryUI.strike_term_seen == 0) {
        if ((dendryUI.z_leader == "Wirth" && !(dendryUI.dvp_in_government || dendryUI.dnvp_in_government || dendryUI.nsdap_in_government)) || (dendryUI.z_leader == "Joos" && dendryUI.spd_in_government && dendryUI.peoples_party) || dendryUI.z_leader == "Kaiser") {
            window.support_labor();
        } else if (dendryUI.z_leader == "Adenauer" || dendryUI.z_leader == "Marx" || dendryUI.z_leader == "Stegerwald") {
            window.support_balance();
        } else if (dendryUI.z_leader == "Bracht" || dendryUI.z_leader == "Kaas" || dendryUI.z_leader == "Brüning") {
            window.support_employers();
        }
    }  else if (dendryUI.z_rally_timer <= 0) {
        window.z_rally();
    }
}

window.dvp_turn = function() {
    if (dendryUI.labor_minister_party == "DVP" && dendryUI.labor_affairs_timer == 0 && dendryUI.strike_term_seen == 0) {
        if (dendryUI.dvp_ideology == "Left" && (dendryUI.dvp_leader == "Stresemann" || dendryUI.dvp_leader == "Thiel" || dendryUI.dvp_leader == "zu Dohna-Schlodien" || dendryUI.dvp_leader == "Glatzel")) {
            window.support_balance();
        } else {
            window.support_employers();
        }
    } else if (dendryUI.dvp_rally_timer <= 0) {
        window.dvp_rally();
    }
}

window.dnvp_turn = function() {
    if (dendryUI.labor_minister_party == "DNVP" && dendryUI.labor_affairs_timer == 0 && dendryUI.strike_term_seen == 0) {
        if (dendryUI.dnvp_leader == "Treviranus" || dendryUI.dnvp_leader == "Lambach" || dendryUI.dnvp_leader == "Lejeune-Jung") {
            window.support_balance();
        } else if (dendryUI.dnvp_leader == "Westarp" || dendryUI.dnvp_leader == "Schiele" || dendryUI.dnvp_leader == "Keudell" || dendryUI.dnvp_leader == "Hergt" || dendryUI.dnvp_leader == "Hugenberg" || dendryUI.dnvp_leader == "Triumvirate") {
            window.support_employers();
        }
    } else if (dendryUI.dnvp_rally_timer <= 0) {
        window.dnvp_rally();
    }
}
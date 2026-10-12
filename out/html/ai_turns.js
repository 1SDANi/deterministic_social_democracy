window.ai_turns = function() {
    window.kpd_turn();

    if (dendryUI.dendryEngine.state.qualities.lvp_formed) {
        // TODO
    } else {
        window.ddp_turn();
    }

    if (dendryUI.dendryEngine.state.qualities.sapd_formed) {
        // TODO
    }

    if (dendryUI.dendryEngine.state.qualities.cvp_formed) {
        // TODO
    } else {
        window.z_turn();
    }

    if (!dendryUI.dendryEngine.state.qualities.lvp_formed || !dendryUI.dendryEngine.state.qualities.cvp_dvp_formed) {
        window.dvp_turn();
    }

    if (dendryUI.dendryEngine.state.qualities.kvp_formed && !dendryUI.dendryEngine.state.qualities.cvp_kvp_formed) {
        // TODO
    }

    if (dendryUI.dendryEngine.state.qualities.dnf_formed) {
        // TODO
    } else if (!dendryUI.dendryEngine.state.qualities.cvp_formed) {
        window.dnvp_turn();
    }

    if (dendryUI.dendryEngine.state.qualities.black_thursday_seen) {
        // TODO
    }
}

window.kpd_turn = function() {
    console.log('kpd turn');
    console.log('dendryUI.dendryEngine.state.qualities: ' + dendryUI.dendryEngine.state.qualities);
    console.log('labor minister party: ' + dendryUI.dendryEngine.state.qualities.labor_minister_party);
    if (dendryUI.dendryEngine.state.qualities.labor_minister_party == "KPD" && dendryUI.dendryEngine.state.qualities.labor_affairs_timer == 0 && dendryUI.dendryEngine.state.qualities.strike_term_seen == 0) {
        window.support_labor();
    } else if (dendryUI.dendryEngine.state.qualities.kpd_rally_timer <= 0) {
        window.kpd_rally();
    }
};

window.ddp_turn = function() {
    console.log('ddp turn');
    if (dendryUI.dendryEngine.state.qualities.labor_minister_party == dendryUI.dendryEngine.state.qualities.ddp_name && dendryUI.dendryEngine.state.qualities.labor_affairs_timer == 0 && dendryUI.dendryEngine.state.qualities.strike_term_seen == 0) {
        if (dendryUI.dendryEngine.state.qualities.ddp_ideology == "Left" && dendryUI.dendryEngine.state.qualities.ddp_leader == "Erkelenz") {
            window.support_labor();
        } else if (ddp_ideology == "Moderate") {
            if (dendryUI.dendryEngine.state.qualities.ddp_leader == "Heuss" || dendryUI.dendryEngine.state.qualities.ddp_leader == "Lemmer" || dendryUI.dendryEngine.state.qualities.ddp_leader == "Lüders") {
                window.support_balance();
            } else {
                window.support_employers();
            }
        }
    } else if (dendryUI.dendryEngine.state.qualities.ddp_rally_timer <= 0) {
        window.ddp_rally();
    }
};

window.z_turn = function() {
    console.log('z turn');
    if (dendryUI.dendryEngine.state.qualities.labor_minister_party == dendryUI.dendryEngine.state.qualities.z_party_name && dendryUI.dendryEngine.state.qualities.labor_affairs_timer == 0 && dendryUI.dendryEngine.state.qualities.strike_term_seen == 0) {
        if ((dendryUI.dendryEngine.state.qualities.z_leader == "Wirth" && !(dendryUI.dendryEngine.state.qualities.dvp_in_government || dendryUI.dendryEngine.state.qualities.dnvp_in_government || dendryUI.dendryEngine.state.qualities.nsdap_in_government)) || (dendryUI.dendryEngine.state.qualities.z_leader == "Joos" && dendryUI.dendryEngine.state.qualities.spd_in_government && dendryUI.dendryEngine.state.qualities.peoples_party) || dendryUI.dendryEngine.state.qualities.z_leader == "Kaiser") {
            window.support_labor();
        } else if (dendryUI.dendryEngine.state.qualities.z_leader == "Adenauer" || dendryUI.dendryEngine.state.qualities.z_leader == "Marx" || dendryUI.dendryEngine.state.qualities.z_leader == "Stegerwald") {
            window.support_balance();
        } else if (dendryUI.dendryEngine.state.qualities.z_leader == "Bracht" || dendryUI.dendryEngine.state.qualities.z_leader == "Kaas" || dendryUI.dendryEngine.state.qualities.z_leader == "Brüning") {
            window.support_employers();
        }
    }  else if (dendryUI.dendryEngine.state.qualities.z_rally_timer <= 0) {
        window.z_rally();
    }
}

window.dvp_turn = function() {
    console.log('dvp turn');
    if (dendryUI.dendryEngine.state.qualities.labor_minister_party == "DVP" && dendryUI.dendryEngine.state.qualities.labor_affairs_timer == 0 && dendryUI.dendryEngine.state.qualities.strike_term_seen == 0) {
        if (dendryUI.dendryEngine.state.qualities.dvp_ideology == "Left" && (dendryUI.dendryEngine.state.qualities.dvp_leader == "Stresemann" || dendryUI.dendryEngine.state.qualities.dvp_leader == "Thiel" || dendryUI.dendryEngine.state.qualities.dvp_leader == "zu Dohna-Schlodien" || dendryUI.dendryEngine.state.qualities.dvp_leader == "Glatzel")) {
            window.support_balance();
        } else {
            window.support_employers();
        }
    } else if (dendryUI.dendryEngine.state.qualities.dvp_rally_timer <= 0) {
        window.dvp_rally();
    }
}

window.dnvp_turn = function() {
    console.log('dnvp turn');
    if (dendryUI.dendryEngine.state.qualities.labor_minister_party == "DNVP" && dendryUI.dendryEngine.state.qualities.labor_affairs_timer == 0 && dendryUI.dendryEngine.state.qualities.strike_term_seen == 0) {
        if (dendryUI.dendryEngine.state.qualities.dnvp_leader == "Treviranus" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Lambach" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Lejeune-Jung") {
            window.support_balance();
        } else if (dendryUI.dendryEngine.state.qualities.dnvp_leader == "Westarp" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Schiele" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Keudell" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Hergt" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Hugenberg" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Triumvirate") {
            window.support_employers();
        }
    } else if (dendryUI.dendryEngine.state.qualities.dnvp_rally_timer <= 0) {
        window.dnvp_rally();
    }
}
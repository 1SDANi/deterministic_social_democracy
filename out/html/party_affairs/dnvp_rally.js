window.dnvp_rally = function() {
    if ((dendryUI.year == 1928 && dendryUI.month == 1) || (dendryUI.next_election_time - dendryUI.time <= 6)) {
        dendryUI.dnvp_rally_timer = 2;
    } else {
        dendryUI.dnvp_rally_timer = 6;
    }

    if (dendryUI.rfb_force > 25 && !dendryUI.rfb_banned && !dendryUI.return_to_normalcy) {
        if (dendryUI.prussia_leader != "Braun" && dendryUI.prussia_leader != "Rosenfeld" && dendryUI.prussian_police_sh_training) {
            window.dnvp_both_protect();
        } else if (dnvp_authoritarian_strength + dnvp_agrarian_strength < dnvp_volkskonservativ_strength + dnvp_christian_social_strength) {
            window.dnvp_police_protect();
        } else {
            window.dnvp_stahlhelm_protect();
        }
    } else {
        window.dnvp_rally_results();
    }
};

window.dnvp_police_protect = function() {
    dendryUI.police_protect_success_dnvp = prussian_police_loyalty_dnvp * prussian_police_militancy * prussian_police_strength*2 - rfb_militancy*rfb_strength;

    if (dendryUI.police_protect_success_dnvp >= 0) {
        window.dnvp_rally_results()
    } else {
        window.dnvp_police_protect_lose()
    }
};

window.dnvp_police_protect_lose = function() {
    dendryUI.workers_kpd += 3;
    dendryUI.strife += 0.125;
};

window.dnvp_stahlhelm_protect = function() {
    dendryUI.stahlhelm_success = dendryUI.stahlhelm_strength*dendryUI.stahlhelm_militancy - dendryUI.rfb_strength*dendryUI.rfb_militancy;
    
    dendryUI.strife += 0.125;

    if (dendryUI.stahlhelm_success >= 0) {
        window.dnvp_rally_results()
    } else {
        window.dnvp_stahlhelm_protect_lose()
    }
};

window.dnvp_stahlhelm_protect_lose = function() {
    dendryUI.workers_kpd += 3;
    dendryUI.strife += 0.125;
    dendryUI.stahlhelm_strength -= 50;
};

window.dnvp_both_protect = function() {
    dendryUI.stahlhelm_success = dendryUI.stahlhelm_strength*dendryUI.stahlhelm_militancy + dendryUI.prussian_police_loyalty*dendryUI.prussian_police_militancy*dendryUI.prussian_police_strength*2 - dendryUI.rfb_strength*dendryUI.rfb_militancy;

    dendryUI.strife += 0.125;

    if (dendryUI.stahlhelm_success >= 0) {
        window.dnvp_rally_results()
    } else {
        window.dnvp_both_protect_lose()
    }
};

window.dnvp_both_protect_lose = function() {
    dendryUI.workers_kpd += 3;
    dendryUI.strife += 0.125;
    dendryUI.stahlhelm_strength -= 50;
};

window.dnvp_rally_results = function() {
    if (dendryUI.dnvp_leader == "Lambach") {
        if (dendryUI.corporatist_progress) {
            window.dnvp_rally_collaboration();
        } else {
            window.dnvp_rally_local();
        }
    } else if (dendryUI.dnvp_leader == "Hugenberg" || dendryUI.dnvp_leader == "Schiele") {
        window.dnvp_rally_volkism();
    } else if (dendryUI.dnvp_leader == "Triumvirate" || dendryUI.dnvp_leader == "Westarp") {
        window.dnvp_rally_nationalism();
    } else if (dendryUI.dnvp_leader == "Hergt" || dendryUI.dnvp_leader == "Keudell") {
        window.dnvp_rally_democracy();
    } else if (dendryUI.dnvp_leader == "Treviranus" || dendryUI.dnvp_leader == "Lejeune-Jung") {
        if (dendryUI.dnvp_lautenbach_adopted && !dendryUI.return_to_normalcy && (dendryUI.lautenbach_adopted <= dendryUI.dnvp_lautenbach_rally || !dendryUI.dnvp_in_government)) {
            window.dnvp_rally_lautenbach();
        } else {
            if (dendryUI.dnvp_leader == "Lejeune-Jung") {
                window.dnvp_rally_local();
            } else if  (dendryUI.dnvp_leader == "Treviranus") {
                window.dnvp_rally_nationalism();
            }
        }
    }
};

window.dnvp_rally_collaboration = function() {
    dendryUI.old_middle_dnvp += 2*(1-dendryUI.dnvp_dissent);
    dendryUI.new_middle_dnvp += 2*(1-dendryUI.dnvp_dissent);

    if (dendryUI.corporatist_adopted) {
        dendryUI.rural_dnvp += 2*(1-dendryUI.dnvp_dissent);
        dendryUI.workers_dnvp += 2 *(1-dendryUI.dnvp_dissent);
        dendryUI.unemployed_dnvp += 1*(1-dendryUI.dnvp_dissent);
    }

    if (dendryUI.corporatist_progress > 0) {
        dendryUI.rural_dnvp += 1*(1-dendryUI.dnvp_dissent);
        dendryUI.workers_dnvp += 1*(1-dendryUI.dnvp_dissent);
        dendryUI.unemployed_dnvp += 1*(1-dendryUI.dnvp_dissent);
    }
    
    dendryUI.dnvp_christian_social_strength += 3;

    dendryUI.dnvp_christian_social_dissent -= 3;
    dendryUI.dnvp_authoritarian_dissent -= 3;
    dendryUI.dnvp_agrarian_dissent -= 3;
    dendryUI.dnvp_volkskonservativ_dissent -= 3;

    dendryUI.dnvp_nationalism += 1;
};

window.dnvp_rally_collaboration = function() {
    dendryUI.rural_dnvp += 2*(1-dendryUI.dnvp_dissent);
    dendryUI.new_middle_dnvp += (1-dendryUI.dnvp_dissent);
    dendryUI.old_middle_dnvp += (1-dendryUI.dnvp_dissent);
    dendryUI.workers_dnvp += (1-dendryUI.dnvp_dissent);
    dendryUI.unemployed_dnvp += (1-dendryUI.dnvp_dissent);

    if (dendryUI.black_thursday_seen && !dendryUI.return_to_normalcy) {
        dendryUI.rural_dnvp += 2*(1-dendryUI.dnvp_dissent);
        dendryUI.new_middle_dnvp += (1-dendryUI.dnvp_dissent);
        dendryUI.old_middle_dnvp += (1-dendryUI.dnvp_dissent);
        dendryUI.workers_dnvp += (1-dendryUI.dnvp_dissent);
        dendryUI.unemployed_dnvp += (1-dendryUI.dnvp_dissent);
    }

    dendryUI.dnvp_nationalism += 1;
};

window.dnvp_rally_nationalism = function() {
    dendryUI.dnvp_nationalism += 1;
    dendryUI.nationalism += 3*(1-dendryUI.dnvp_dissent);

    dendryUI.rural_dnvp += 3*(1-dendryUI.dnvp_dissent);
    dendryUI.old_middle_dnvp += 2*(1-dendryUI.dnvp_dissent);

    if (dendryUI.dnvp_nationalism >= 3) {
        dendryUI.pro_republic -= 3*(1-dendryUI.dnvp_dissent);

        if (dendryUI.nationalism >= 60) {
            dendryUI.dnvp_volkskonservativ_strength += 3;
            dendryUI.dnvp_authoritarian_strength += 3;
        }
    }
};

window.dnvp_rally_democracy = function() {
    dendryUI.dnvp_democratization -= 1;
    dendryUI.pro_republic += 3*(1-dendryUI.dnvp_dissent);

    if (dendryUI.dnvp_democratization >= 3) {
        dendryUI.rural_dnvp += 2*(1-dendryUI.dnvp_dissent);
        dendryUI.workers_dnvp += 1*(1-dendryUI.dnvp_dissent);
        dendryUI.new_middle_dnvp += 1*(1-dendryUI.dnvp_dissent);
        dendryUI.old_middle_dnvp += 1*(1-dendryUI.dnvp_dissent);
    }
    
    if (dendryUI.pro_republic >= 70) {
        dendryUI.dnvp_christian_social_strength += 3;
    }
};

window.dnvp_rally_lautenbach = function() {
    dendryUI.rural_dnvp += 2*(1-dendryUI.dnvp_dissent);
    dendryUI.old_middle_dnvp += 2*(1-dendryUI.dnvp_dissent);
    dendryUI.new_middle_dnvp += 2*(1-dendryUI.dnvp_dissent);
    dendryUI.unemployed_dnvp += 1*(1-dendryUI.dnvp_dissent);
    dendryUI.workers_dnvp += 1*(1-dendryUI.dnvp_dissent);

    if (dendryUI.lautenbach_adopted) {
        dendryUI.rural_dnvp += 2*(1-dendryUI.dnvp_dissent);
        dendryUI.old_middle_dnvp += 2*(1-dendryUI.dnvp_dissent);
        dendryUI.new_middle_dnvp += 2*(1-dendryUI.dnvp_dissent);
        dendryUI.workers_dnvp += 2*(1-dendryUI.dnvp_dissent);
        dendryUI.unemployed_dnvp += 2*(1-dendryUI.dnvp_dissent);
    }
    
    dendryUI.dnvp_lautenbach_rally += 1;
};

window.dnvp_rally_local = function() {
    dendryUI.workers_dnvp += 2*(1-dendryUI.dnvp_dissent);
    dendryUI.old_middle_dnvp += 2*(1-dendryUI.dnvp_dissent);
    dendryUI.new_middle_dnvp += 2*(1-dendryUI.dnvp_dissent);
    dendryUI.unemployed_dnvp += 1*(1-dendryUI.dnvp_dissent);
    dendryUI.rural_dnvp += 1*(1-dendryUI.dnvp_dissent);
};
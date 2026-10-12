window.dnvp_rally = function() {
    console.log('dnvp_rally');
    if ((dendryUI.dendryEngine.state.qualities.year == 1928 && dendryUI.dendryEngine.state.qualities.month == 1) || (dendryUI.dendryEngine.state.qualities.next_election_time - dendryUI.dendryEngine.state.qualities.time <= 6)) {
        dendryUI.dendryEngine.state.qualities.dnvp_rally_timer = 2;
    } else {
        dendryUI.dendryEngine.state.qualities.dnvp_rally_timer = 6;
    }

    if (dendryUI.dendryEngine.state.qualities.rfb_force > 25 && !dendryUI.dendryEngine.state.qualities.rfb_banned && !dendryUI.dendryEngine.state.qualities.return_to_normalcy) {
        if (dendryUI.dendryEngine.state.qualities.prussia_leader != "Braun" && dendryUI.dendryEngine.state.qualities.prussia_leader != "Rosenfeld" && dendryUI.dendryEngine.state.qualities.prussian_police_sh_training) {
            window.dnvp_both_protect();
        } else if (dendryUI.dendryEngine.state.qualities.dnvp_authoritarian_strength + dendryUI.dendryEngine.state.qualities.dnvp_agrarian_strength < dendryUI.dendryEngine.state.qualities.dnvp_volkskonservativ_strength + dendryUI.dendryEngine.state.qualities.dnvp_christian_social_strength) {
            window.dnvp_police_protect();
        } else {
            window.dnvp_stahlhelm_protect();
        }
    } else {
        window.dnvp_rally_results();
    }
};

window.dnvp_police_protect = function() {
    console.log('dnvp_police_protect');
    dendryUI.dendryEngine.state.qualities.police_protect_success_dnvp = dendryUI.dendryEngine.state.qualities.prussian_police_loyalty_dnvp * dendryUI.dendryEngine.state.qualities.prussian_police_militancy * dendryUI.dendryEngine.state.qualities.prussian_police_strength*2 - dendryUI.dendryEngine.state.qualities.rfb_militancy*dendryUI.dendryEngine.state.qualities.rfb_strength;

    if (dendryUI.dendryEngine.state.qualities.police_protect_success_dnvp >= 0) {
        window.dnvp_rally_results()
    } else {
        window.dnvp_police_protect_lose()
    }
};

window.dnvp_police_protect_lose = function() {
    console.log('dnvp_police_protect_lose');
    dendryUI.dendryEngine.state.qualities.workers_kpd += 3;
    dendryUI.dendryEngine.state.qualities.strife += 0.125;
};

window.dnvp_stahlhelm_protect = function() {
    console.log('dnvp_stahlhelm_protect');
    dendryUI.dendryEngine.state.qualities.stahlhelm_success = dendryUI.dendryEngine.state.qualities.stahlhelm_strength*dendryUI.dendryEngine.state.qualities.stahlhelm_militancy - dendryUI.dendryEngine.state.qualities.rfb_strength*dendryUI.dendryEngine.state.qualities.rfb_militancy;
    
    dendryUI.dendryEngine.state.qualities.strife += 0.125;

    if (dendryUI.dendryEngine.state.qualities.stahlhelm_success >= 0) {
        window.dnvp_rally_results()
    } else {
        window.dnvp_stahlhelm_protect_lose()
    }
};

window.dnvp_stahlhelm_protect_lose = function() {
    console.log('dnvp_stahlhelm_protect_lose');
    dendryUI.dendryEngine.state.qualities.workers_kpd += 3;
    dendryUI.dendryEngine.state.qualities.strife += 0.125;
    dendryUI.dendryEngine.state.qualities.stahlhelm_strength -= 50;
};

window.dnvp_both_protect = function() {
    console.log('dnvp_both_protect');
    dendryUI.dendryEngine.state.qualities.stahlhelm_success = dendryUI.dendryEngine.state.qualities.stahlhelm_strength*dendryUI.dendryEngine.state.qualities.stahlhelm_militancy + dendryUI.dendryEngine.state.qualities.prussian_police_loyalty*dendryUI.dendryEngine.state.qualities.prussian_police_militancy*dendryUI.dendryEngine.state.qualities.prussian_police_strength*2 - dendryUI.dendryEngine.state.qualities.rfb_strength*dendryUI.dendryEngine.state.qualities.rfb_militancy;

    dendryUI.dendryEngine.state.qualities.strife += 0.125;

    if (dendryUI.dendryEngine.state.qualities.stahlhelm_success >= 0) {
        window.dnvp_rally_results()
    } else {
        window.dnvp_both_protect_lose()
    }
};

window.dnvp_both_protect_lose = function() {
    console.log('dnvp_both_protect_lose');
    dendryUI.dendryEngine.state.qualities.workers_kpd += 3;
    dendryUI.dendryEngine.state.qualities.strife += 0.125;
    dendryUI.dendryEngine.state.qualities.stahlhelm_strength -= 50;
};

window.dnvp_rally_results = function() {
    console.log('dnvp_rally_results');
    if (dendryUI.dendryEngine.state.qualities.dnvp_leader == "Lambach") {
        if (dendryUI.dendryEngine.state.qualities.corporatist_progress) {
            window.dnvp_rally_collaboration();
        } else {
            window.dnvp_rally_local();
        }
    } else if (dendryUI.dendryEngine.state.qualities.dnvp_leader == "Hugenberg" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Schiele") {
        window.dnvp_rally_volkism();
    } else if (dendryUI.dendryEngine.state.qualities.dnvp_leader == "Triumvirate" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Westarp") {
        window.dnvp_rally_nationalism();
    } else if (dendryUI.dendryEngine.state.qualities.dnvp_leader == "Hergt" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Keudell") {
        window.dnvp_rally_democracy();
    } else if (dendryUI.dendryEngine.state.qualities.dnvp_leader == "Treviranus" || dendryUI.dendryEngine.state.qualities.dnvp_leader == "Lejeune-Jung") {
        if (dendryUI.dendryEngine.state.qualities.dnvp_lautenbach_adopted && !dendryUI.dendryEngine.state.qualities.return_to_normalcy && (dendryUI.dendryEngine.state.qualities.lautenbach_adopted <= dendryUI.dendryEngine.state.qualities.dnvp_lautenbach_rally || !dendryUI.dendryEngine.state.qualities.dnvp_in_government)) {
            window.dnvp_rally_lautenbach();
        } else {
            if (dendryUI.dendryEngine.state.qualities.dnvp_leader == "Lejeune-Jung") {
                window.dnvp_rally_local();
            } else if  (dendryUI.dendryEngine.state.qualities.dnvp_leader == "Treviranus") {
                window.dnvp_rally_nationalism();
            }
        }
    }
};

window.dnvp_rally_collaboration = function() {
    console.log('dnvp_rally_collaboration');
    dendryUI.dendryEngine.state.qualities.old_middle_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);

    if (dendryUI.dendryEngine.state.qualities.corporatist_adopted) {
        dendryUI.dendryEngine.state.qualities.rural_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.workers_dnvp += 2 *(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    }

    if (dendryUI.dendryEngine.state.qualities.corporatist_progress > 0) {
        dendryUI.dendryEngine.state.qualities.rural_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.workers_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.dnvp_christian_social_strength += 3;

    dendryUI.dendryEngine.state.qualities.dnvp_christian_social_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.dnvp_authoritarian_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.dnvp_agrarian_dissent -= 3;
    dendryUI.dendryEngine.state.qualities.dnvp_volkskonservativ_dissent -= 3;

    dendryUI.dendryEngine.state.qualities.dnvp_nationalism += 1;
};

window.dnvp_rally_volkism = function() {
    console.log('dnvp_rally_volkism');
    dendryUI.dendryEngine.state.qualities.rural_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_dnvp += (1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_dnvp += (1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.workers_dnvp += (1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_dnvp += (1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);

    if (dendryUI.dendryEngine.state.qualities.black_thursday_seen && !dendryUI.dendryEngine.state.qualities.return_to_normalcy) {
        dendryUI.dendryEngine.state.qualities.rural_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_dnvp += (1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.old_middle_dnvp += (1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.workers_dnvp += (1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_dnvp += (1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    }

    dendryUI.dendryEngine.state.qualities.dnvp_nationalism += 1;
};

window.dnvp_rally_nationalism = function() {
    console.log('dnvp_rally_nationalism');
    dendryUI.dendryEngine.state.qualities.dnvp_nationalism += 1;
    dendryUI.dendryEngine.state.qualities.nationalism += 3*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);

    dendryUI.dendryEngine.state.qualities.rural_dnvp += 3*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);

    if (dendryUI.dendryEngine.state.qualities.dnvp_nationalism >= 3) {
        dendryUI.dendryEngine.state.qualities.pro_republic -= 3*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);

        if (dendryUI.dendryEngine.state.qualities.nationalism >= 60) {
            dendryUI.dendryEngine.state.qualities.dnvp_volkskonservativ_strength += 3;
            dendryUI.dendryEngine.state.qualities.dnvp_authoritarian_strength += 3;
        }
    }
};

window.dnvp_rally_democracy = function() {
    console.log('dnvp_rally_democracy');
    dendryUI.dendryEngine.state.qualities.dnvp_democratization -= 1;
    dendryUI.dendryEngine.state.qualities.pro_republic += 3*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);

    if (dendryUI.dendryEngine.state.qualities.dnvp_democratization >= 3) {
        dendryUI.dendryEngine.state.qualities.rural_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.workers_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.old_middle_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    }
    
    if (dendryUI.dendryEngine.state.qualities.pro_republic >= 70) {
        dendryUI.dendryEngine.state.qualities.dnvp_christian_social_strength += 3;
    }
};

window.dnvp_rally_lautenbach = function() {
    console.log('dnvp_rally_lautenbach');
    dendryUI.dendryEngine.state.qualities.rural_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.workers_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);

    if (dendryUI.dendryEngine.state.qualities.lautenbach_adopted) {
        dendryUI.dendryEngine.state.qualities.rural_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.old_middle_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.new_middle_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.workers_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
        dendryUI.dendryEngine.state.qualities.unemployed_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    }
    
    dendryUI.dendryEngine.state.qualities.dnvp_lautenbach_rally += 1;
};

window.dnvp_rally_local = function() {
    console.log('dnvp_rally_local');
    dendryUI.dendryEngine.state.qualities.workers_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.old_middle_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.new_middle_dnvp += 2*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.unemployed_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
    dendryUI.dendryEngine.state.qualities.rural_dnvp += 1*(1-dendryUI.dendryEngine.state.qualities.dnvp_dissent);
};
window.dnvp_rally = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_rally');
    if ((Q.year == 1928 && Q.month == 1) || (Q.next_election_time - Q.time <= 6)) {
        Q.dnvp_rally_timer = 2;
        Q.dnvp_rally_post_timer = 1;
    } else {
        Q.dnvp_rally_timer = 6;
        Q.dnvp_rally_post_timer = 1;
    }

    if (Q.rfb_force > 25 && !Q.rfb_banned && !Q.return_to_normalcy) {
        if (Q.prussia_leader != "Braun" && Q.prussia_leader != "Rosenfeld" && Q.prussian_police_sh_training) {
            window.dnvp_both_protect();
        } else if (Q.dnvp_authoritarian_strength + Q.dnvp_agrarian_strength < Q.dnvp_volkskonservativ_strength + Q.dnvp_christian_social_strength) {
            window.dnvp_police_protect();
        } else {
            window.dnvp_stahlhelm_protect();
        }
    } else {
        window.dnvp_rally_results();
    }
};

window.dnvp_police_protect = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_police_protect');
    Q.police_protect_success_dnvp = Q.prussian_police_loyalty_dnvp * Q.prussian_police_militancy * Q.prussian_police_strength*2 - Q.rfb_militancy*Q.rfb_strength;

    if (Q.police_protect_success_dnvp >= 0) {
        window.dnvp_rally_results()
    } else {
        window.dnvp_police_protect_lose()
    }
};

window.dnvp_police_protect_lose = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_police_protect_lose');
    Q.workers_kpd += 3;
    Q.strife += 0.125;
};

window.dnvp_stahlhelm_protect = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_stahlhelm_protect');
    Q.stahlhelm_success = Q.stahlhelm_strength*Q.stahlhelm_militancy - Q.rfb_strength*Q.rfb_militancy;
    
    Q.strife += 0.125;

    if (Q.stahlhelm_success >= 0) {
        window.dnvp_rally_results()
    } else {
        window.dnvp_stahlhelm_protect_lose()
    }
};

window.dnvp_stahlhelm_protect_lose = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_stahlhelm_protect_lose');
    Q.workers_kpd += 3;
    Q.strife += 0.125;
    Q.stahlhelm_strength -= 50;
};

window.dnvp_both_protect = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_both_protect');
    Q.stahlhelm_success = Q.stahlhelm_strength*Q.stahlhelm_militancy + Q.prussian_police_loyalty*Q.prussian_police_militancy*Q.prussian_police_strength*2 - Q.rfb_strength*Q.rfb_militancy;

    Q.strife += 0.125;

    if (Q.stahlhelm_success >= 0) {
        window.dnvp_rally_results()
    } else {
        window.dnvp_both_protect_lose()
    }
};

window.dnvp_both_protect_lose = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_both_protect_lose');
    Q.workers_kpd += 3;
    Q.strife += 0.125;
    Q.stahlhelm_strength -= 50;
};

window.dnvp_rally_results = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_rally_results');
    if (Q.dnvp_leader == "Lambach") {
        if (Q.corporatist_progress) {
            window.dnvp_rally_collaboration();
        } else {
            window.dnvp_rally_local();
        }
    } else if (Q.dnvp_leader == "Hugenberg" || Q.dnvp_leader == "Schiele") {
        window.dnvp_rally_volkism();
    } else if (Q.dnvp_leader == "Triumvirate" || Q.dnvp_leader == "Westarp") {
        window.dnvp_rally_nationalism();
    } else if (Q.dnvp_leader == "Hergt" || Q.dnvp_leader == "Keudell") {
        window.dnvp_rally_democracy();
    } else if (Q.dnvp_leader == "Treviranus" || Q.dnvp_leader == "Lejeune-Jung") {
        if (Q.dnvp_lautenbach_adopted && !Q.return_to_normalcy && (Q.lautenbach_adopted <= Q.dnvp_lautenbach_rally || !Q.dnvp_in_government)) {
            window.dnvp_rally_lautenbach();
        } else {
            if (Q.dnvp_leader == "Lejeune-Jung") {
                window.dnvp_rally_local();
            } else if  (Q.dnvp_leader == "Treviranus") {
                window.dnvp_rally_nationalism();
            }
        }
    }
};

window.dnvp_rally_collaboration = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_rally_collaboration');
    Q.old_middle_dnvp += 2*(1-Q.dnvp_dissent);
    Q.new_middle_dnvp += 2*(1-Q.dnvp_dissent);

    if (Q.corporatist_adopted) {
        Q.rural_dnvp += 2*(1-Q.dnvp_dissent);
        Q.workers_dnvp += 2 *(1-Q.dnvp_dissent);
        Q.unemployed_dnvp += 1*(1-Q.dnvp_dissent);
    }

    if (Q.corporatist_progress > 0) {
        Q.rural_dnvp += 1*(1-Q.dnvp_dissent);
        Q.workers_dnvp += 1*(1-Q.dnvp_dissent);
        Q.unemployed_dnvp += 1*(1-Q.dnvp_dissent);
    }
    
    Q.dnvp_christian_social_strength += 3;

    Q.dnvp_christian_social_dissent -= 3;
    Q.dnvp_authoritarian_dissent -= 3;
    Q.dnvp_agrarian_dissent -= 3;
    Q.dnvp_volkskonservativ_dissent -= 3;

    Q.dnvp_nationalism += 1;
};

window.dnvp_rally_volkism = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_rally_volkism');
    Q.rural_dnvp += 2*(1-Q.dnvp_dissent);
    Q.new_middle_dnvp += (1-Q.dnvp_dissent);
    Q.old_middle_dnvp += (1-Q.dnvp_dissent);
    Q.workers_dnvp += (1-Q.dnvp_dissent);
    Q.unemployed_dnvp += (1-Q.dnvp_dissent);

    if (Q.black_thursday_seen && !Q.return_to_normalcy) {
        Q.rural_dnvp += 2*(1-Q.dnvp_dissent);
        Q.new_middle_dnvp += (1-Q.dnvp_dissent);
        Q.old_middle_dnvp += (1-Q.dnvp_dissent);
        Q.workers_dnvp += (1-Q.dnvp_dissent);
        Q.unemployed_dnvp += (1-Q.dnvp_dissent);
    }

    Q.dnvp_nationalism += 1;
};

window.dnvp_rally_nationalism = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_rally_nationalism');
    Q.dnvp_nationalism += 1;
    Q.nationalism += 3*(1-Q.dnvp_dissent);

    Q.rural_dnvp += 3*(1-Q.dnvp_dissent);
    Q.old_middle_dnvp += 2*(1-Q.dnvp_dissent);

    if (Q.dnvp_nationalism >= 3) {
        Q.pro_republic -= 3*(1-Q.dnvp_dissent);

        if (Q.nationalism >= 60) {
            Q.dnvp_volkskonservativ_strength += 3;
            Q.dnvp_authoritarian_strength += 3;
        }
    }
};

window.dnvp_rally_democracy = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_rally_democracy');
    Q.dnvp_democratization -= 1;
    Q.pro_republic += 3*(1-Q.dnvp_dissent);

    if (Q.dnvp_democratization >= 3) {
        Q.rural_dnvp += 2*(1-Q.dnvp_dissent);
        Q.workers_dnvp += 1*(1-Q.dnvp_dissent);
        Q.new_middle_dnvp += 1*(1-Q.dnvp_dissent);
        Q.old_middle_dnvp += 1*(1-Q.dnvp_dissent);
    }
    
    if (Q.pro_republic >= 70) {
        Q.dnvp_christian_social_strength += 3;
    }
};

window.dnvp_rally_lautenbach = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_rally_lautenbach');
    Q.rural_dnvp += 2*(1-Q.dnvp_dissent);
    Q.old_middle_dnvp += 2*(1-Q.dnvp_dissent);
    Q.new_middle_dnvp += 2*(1-Q.dnvp_dissent);
    Q.unemployed_dnvp += 1*(1-Q.dnvp_dissent);
    Q.workers_dnvp += 1*(1-Q.dnvp_dissent);

    if (Q.lautenbach_adopted) {
        Q.rural_dnvp += 2*(1-Q.dnvp_dissent);
        Q.old_middle_dnvp += 2*(1-Q.dnvp_dissent);
        Q.new_middle_dnvp += 2*(1-Q.dnvp_dissent);
        Q.workers_dnvp += 2*(1-Q.dnvp_dissent);
        Q.unemployed_dnvp += 2*(1-Q.dnvp_dissent);
    }
    
    Q.dnvp_lautenbach_rally += 1;
};

window.dnvp_rally_local = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dnvp_rally_local');
    Q.workers_dnvp += 2*(1-Q.dnvp_dissent);
    Q.old_middle_dnvp += 2*(1-Q.dnvp_dissent);
    Q.new_middle_dnvp += 2*(1-Q.dnvp_dissent);
    Q.unemployed_dnvp += 1*(1-Q.dnvp_dissent);
    Q.rural_dnvp += 1*(1-Q.dnvp_dissent);
};
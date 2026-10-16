window.dvp_rally = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_rally');
    if ((Q.year == 1928 && Q.month == 1) || (Q.next_election_time - Q.time <= 6)) {
        Q.dvp_rally_timer = 2;
        Q.dvp_rally_post_timer = 1;
    } else {
        Q.dvp_rally_timer = 6;
        Q.dvp_rally_post_timer = 1;
    }

    if (Q.sa_force > 25 && !Q.sa_banned && !Q.return_to_normalcy) {
        if (Q.dvp_ideology == "Left") {
            window.dvp_police_protect();
        }
    } else {
        window.dvp_rally_results();
    }
};

window.dvp_police_protect = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_police_protect');
    Q.police_protect_success_dvp = Q.prussian_police_loyalty_dvp*Q.prussian_police_militancy*Q.prussian_police_strength*2 - Q.sa_strength*Q.sa_militancy;

    if (Q.police_protect_success_dvp >= 0) {
        window.dvp_rally_results()
    } else {
        window.dvp_police_protect_lose()
    }
};

window.dvp_police_protect_lose = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_police_protect_lose');
    Q.workers_nsdap += 3;
    Q.strife += 0.125;
};

window.dvp_rally_results = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_rally_results');
    if (Q.workers_schleicher_bonus) {
        window.dvp_rally_collaboration();
    } else if (Q.dvp_leader == "zu Dohna-Schlodien" || Q.dvp_leader == "Luther") {
        if (upper_tax_rates > 1) {
            window.dvp_rally_reagan();
        } else {
            window.dvp_rally_democracy();
        }
    } else if (Q.dvp_leader == "Scholz" || Q.dvp_leader == "Dingeldey" || Q.dvp_leader == "Hugo") {
        window.dvp_rally_nationalism();
    } else if (Q.dvp_leader == "Thiel" || Q.dvp_leader == "Glatzel") {
        if (Q.return_to_normalcy == 0 && Q.dvp_lautenbach_adopted && !Q.return_to_normalcy && (Q.lautenbach_adopted <= Q.dvp_lautenbach_rally || !Q.dvp_in_government)) {
            window.dvp_rally_lautenbach();
        } else {
            window.dvp_rally_local();
        }
    } else if (Q.dvp_leader == "Stresemann" || Q.dvp_leader == "Kardorff" || Q.dvp_leader == "Curtius") {
        window.dvp_rally_democracy();
    }
};

window.dvp_rally_collaboration = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_rally_collaboration');
    Q.old_middle_dvp += 3*(1-Q.dvp_dissent);
    Q.new_middle_dvp += 2*(1-Q.dvp_dissent);

    if (Q.workers_schleicher_bonus > 0) {
        Q.workers_dvp += 1*(1-Q.dvp_dissent);
        Q.unemployed_dvp += 1*(1-Q.dvp_dissent);
        Q.rural_dvp += 1*(1-Q.dvp_dissent);
    }
    
    if (Q.workers_schleicher_bonus > 1) {
        Q.workers_dvp += 1*(1-Q.dvp_dissent);
        Q.unemployed_dvp += 1*(1-Q.dvp_dissent);
        Q.rural_dvp += 1*(1-Q.dvp_dissent);
    }
    
    Q.dvp_right += 1;
    Q.ddp_right += 1;
    Q.lvp_right += 1;

    Q.dvp_industrialist_strength += 3;
    Q.ddp_business_strength += 3;
    Q.z_conservative_strength += 3;

    Q.dvp_labor_dissent -= 3;
    Q.dvp_liberal_dissent -= 3;
    Q.dvp_industrialist_dissent -= 3;
    Q.dvp_nationalist_dissent -= 3;

    Q.dvp_nationalism += 1;
};

window.dvp_rally_reagan = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_rally_reagan');
    Q.ld_middle_dvp += 2*(1-Q.dvp_dissent);
    Q.new_middle_dvp += (1-Q.dvp_dissent);
    
    if (Q.upper_tax_rates > 1) {
        Q.rural_dvp += 1*(1-Q.dvp_dissent);
        Q.old_middle_dvp += 1*(1-Q.dvp_dissent);
        Q.new_middle_dvp += (1-Q.dvp_dissent);
        Q.workers_dvp += 1*(1-Q.dvp_dissent);
    }
    
    Q.dvp_right += 0.5;

    Q.dvp_liberal_strength += 3;
    Q.dvp_industrialist_strength += 3;

    Q.dvp_industrialist_dissent -= 3;
    Q.dvp_liberal_dissent -= 3;
};

window.dvp_rally_nationalism = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_rally_nationalism');
    Q.dvp_nationalism += 1;
    Q.nationalism += 3*(1-Q.dvp_dissent);
    Q.new_middle_dvp += 2*(1-Q.dvp_dissent);
    Q.old_middle_dvp += 2*(1-Q.dvp_dissent);
    Q.rural_dvp += 1*(1-Q.dvp_dissent);

    if (Q.dvp_nationalism >= 3)
    {
        Q.pro_republic -= 3*(1-Q.dvp_dissent);

        if (Q.nationalism >= 60) {
            Q.dvp_right += 0.5;
            Q.ddp_right += 0.5;

            Q.dvp_nationalist_strength += 3;
            Q.ddp_regionalist_strength += 3;
            Q.z_conservative_strength += 3;
        }
    }
};

window.dvp_rally_democracy = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_rally_democracy');
    Q.dvp_democratization -= 1;
    Q.pro_republic += 3*(1-Q.dvp_dissent);
    if (Q.dvp_democratization >= 3) {
        Q.rural_dvp += 1*(1-Q.dvp_dissent);
        Q.new_middle_dvp += 2*(1-Q.dvp_dissent);
        Q.old_middle_dvp += 2*(1-Q.dvp_dissent);
    }

    if (Q.pro_republic >= 70) {
        Q.dvp_left += 0.5;
        Q.ddp_left += 0.5;

        Q.dvp_liberal_strength += 3;
        Q.ddp_liberal_strength += 3;
        Q.z_center_strength += 3;
    }
};

window.dvp_rally_lautenbach = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_rally_lautenbach');
    Q.old_middle_dvp += 3*(1-Q.dvp_dissent);
    Q.new_middle_dvp += 2*(1-Q.dvp_dissent);
    Q.rural_dvp += 2*(1-Q.dvp_dissent);
    Q.unemployed_dvp += 1*(1-Q.dvp_dissent);
    Q.workers_dvp += 1*(1-Q.dvp_dissent);

    if (Q.lautenbach_adopted) {
        Q.old_middle_dvp += 3*(1-Q.dvp_dissent);
        Q.new_middle_dvp += 2*(1-Q.dvp_dissent);
        Q.rural_dvp += 1*(1-Q.dvp_dissent);
        Q.workers_dvp += 2*(1-Q.dvp_dissent);
        Q.unemployed_dvp += 2*(1-Q.dvp_dissent);
    }
    
    Q.dvp_lautenbach_rally += 1;
};

window.dvp_rally_local = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('dvp_rally_local');
    Q.workers_dvp += 2*(1-Q.dvp_dissent);
    Q.old_middle_dvp += 2*(1-Q.dvp_dissent);
    Q.new_middle_dvp += 2*(1-Q.dvp_dissent);
    Q.unemployed_dvp += 2*(1-Q.dvp_dissent);
};
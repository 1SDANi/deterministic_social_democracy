window.kpd_rally = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd rally');
    if ((Q.year == 1928 && Q.month == 1) || (Q.next_election_time - Q.time <= 6)) {
        Q.kpd_rally_timer = 2;
        Q.kpd_rally_post_timer = 1;
    } else {
        Q.kpd_rally_timer = 6;
        Q.kpd_rally_post_timer = 1;
    }

    if (Q.sa_force > 25 && !Q.sa_banned && !Q.return_to_normalcy) {
        window.rfb_protect();
    } else {
        window.kpd_rally_results();
    }
};

window.rfb_protect = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('rfb protect');
    Q.rfb_success = Q.rfb_strength*Q.rfb_militancy - Q.sa_strength*Q.sa_militancy;

    Q.strife += 0.125;

    if (Q.rfb_success >= 0) {
        Q.strife += 0.125;
        window.kpd_rally_results();
    } else {
        window.rfb_protect_lose()
    }
};

window.rfb_protect_lose = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('rfb protect lose');
    Q.workers_nsdap += 3;
    Q.rfb_strength -= 50;
};

window.kpd_rally_results = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd rally results');
    if (Q.kpd_leader == "Thälmann") {
        window.kpd_rally_struggle();
    } else if (Q.kpd_leader == "Conciliators") {
        if (Q.socializations > 0) {
            window.kpd_rally_councils();
        } else if (!Q.return_to_normalcy) {
            window.kpd_rally_pacifism();
        } else {
            window.kpd_rally_local();
        }
    } else if (Q.kpd_leader == "Brandlerites") {
        if (Q.kpd_wtb_adopted && !Q.return_to_normalcy && (Q.wtb_implemented <= Q.kpd_wtb_rally || !Q.kpd_in_government)) {
            window.kpd_rally_wtb();
        } else if (Q.kpd_in_government && !Q.nazi_peak_triggered) {
            window.kpd_rally_democracy()
        }  else {
            window.kpd_rally_local();
        }
    }
};

window.kpd_rally_struggle = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd rally struggle');
    Q.workers_kpd += 5*(1-Q.kpd_dissent);
    Q.unemployed_kpd += 6*(1-Q.kpd_dissent);

    if (Q.nationalization_progress) {
        Q.workers_kpd += 3*(1-Q.kpd_dissent);
        Q.unemployed_kpd += 4*(1-Q.kpd_dissent);
    }

    Q.kpd_stalinist_strength += 5;
    
    Q.kpd_stalinist_dissent -= 5;

    Q.old_middle_kpd -= 3;
    Q.new_middle_kpd -= 2;
    
    Q.rfb_force += 4*(1-Q.kpd_dissent);
};

window.kpd_rally_councils = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd rally councils');
    Q.unemployed_kpd += 3*(1-Q.kpd_dissent);

    if (Q.socializations) {
        Q.unemployed_kpd += 3*(1-Q.kpd_dissent);
        Q.workers_kpd += 3*(1-Q.kpd_dissent);
    }

    if (Q.socializations > 1) {
        Q.workers_kpd += 4*(1-Q.kpd_dissent);
    }
    
    Q.kpd_brandlerite_strength += 3;
    Q.kpd_conciliator_strength += 4;

    Q.kpd_conciliator_dissent -= 3;
    Q.kpd_brandlerite_dissent -= 3;

    Q.rfb_force += 4*(1-Q.kpd_dissent);
};

window.kpd_rally_pacifism = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd rally pacifism');
    Q.kpd_pacifism += 1;
    Q.nationalism -= 3*(1 - Q.kpd_dissent);

    if (Q.kpd_pacifism >= 3) {
        Q.unemployed_kpd += 2*(1-Q.kpd_dissent);
        Q.workers_kpd += 1*(1-Q.kpd_dissent);
        Q.new_middle_kpd += 1*(1-Q.kpd_dissent);

        Q.nationalism -= 3*(1-Q.kpd_dissent);
        
        if (Q.nationalism <= 50) {
            Q.kpd_conciliator_strength += 3
        }
    }
};

window.kpd_rally_democracy = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd rally democracy');
    Q.kpd_democratization += 1;
    Q.pro_republic += 3*(1-Q.kpd_dissent);
    if (Q.kpd_democratization >= 3) {
        Q.unemployed_kpd += 2*(1-Q.kpd_dissent);
        Q.workers_kpd += 1*(1-Q.kpd_dissent);
        Q.new_middle_kpd += 1*(1-Q.kpd_dissent);
    }
    
    if (Q.pro_republic >= 70) {
        Q.kpd_brandlerite_strength += 3;
    }
};

window.kpd_rally_wtb = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd rally wtb');
    Q.unemployed_kpd += 5*(1-Q.kpd_dissent);
    Q.workers_kpd += 4*(1-Q.kpd_dissent);
    Q.new_middle_kpd += 2*(1-Q.kpd_dissent);

    if (Q.wtb_implemented) {
        Q.unemployed_kpd += 4*(1-Q.kpd_dissent);
        Q.workers_kpd += 3*(1-Q.kpd_dissent);
        Q.new_middle_kpd += 2*(1-Q.kpd_dissent);
        Q.rural_kpd += 1*(1-Q.kpd_dissent);
    }
    
    Q.kpd_wtb_rally += 1;
};

window.kpd_rally_local = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd rally local');
    unemployed_kpd += 4*(1-kpd_dissent);
    workers_kpd += 3*(1-kpd_dissent);
    new_middle_kpd += 2*(1-kpd_dissent);
};
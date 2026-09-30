window.kpd_rally = function() {
    if ((dendryUI.year == 1928 && dendryUI.month == 1) || (dendryUI.next_election_time - dendryUI.time <= 6)) {
        dendryUI.kpd_rally_timer = 2;
    } else {
        dendryUI.kpd_rally_timer = 6;
    }

    if (dendryUI.sa_force > 25 && !dendryUI.sa_banned && !dendryUI.return_to_normalcy) {
        window.rfb_protect();
    } else {
        window.kpd_rally_results();
    }
};

window.rfb_protect = function() {
    dendryUI.rfb_success = dendryUI.rfb_strength*dendryUI.rfb_militancy - dendryUI.sa_strength*dendryUI.sa_militancy;

    dendryUI.strife += 0.125;

    if (dendryUI.rfb_success >= 0) {
        dendryUI.strife += 0.125;
        window.kpd_rally_results();
    } else {
        window.rfb_protect_lose()
    }
};

window.rfb_protect_lose = function() {
    dendryUI.workers_nsdap += 3;
    dendryUI.rfb_strength -= 50;
};

window.kpd_rally_results = function() {
    if (dendryUI.kpd_leader == "Thälmann") {
        window.kpd_rally_struggle();
    } else if (dendryUI.kpd_leader == "Conciliators") {
        if (dendryUI.socializations > 0) {
            window.kpd_rally_councils();
        } else if (dendryUI.return_to_normalcy) {
            window.kpd_rally_pacifism();
        } else {
            window.kpd_rally_local();
        }
    } else if (dendryUI.kpd_leader == "Brandlerites") {
        if (dendryUI.kpd_in_government && !dendryUI.nazi_peak_triggered && !dendryUI.return_to_normalcy && !(dendryUI.kpd_wtb_adopted = 1 || dendryUI.wtb_implemented <= dendryUI.kpd_wtb_rally)) {
            window.kpd_rally_democracy()
        } else if (dendryUI.kpd_wtb_adopted && !dendryUI.return_to_normalcy && (dendryUI.wtb_implemented <= dendryUI.kpd_wtb_rally || !dendryUI.kpd_in_government)) {
            window.kpd_rally_wtb();
        } else {
            window.kpd_rally_local();
        }
    }
};

window.kpd_rally_struggle = function() {
    dendryUI.workers_kpd += 5*(1-dendryUI.kpd_dissent);
    dendryUI.unemployed_kpd += 6*(1-dendryUI.kpd_dissent);

    if (dendryUI.nationalization_progress) {
        dendryUI.workers_kpd += 3*(1-dendryUI.kpd_dissent);
        dendryUI.unemployed_kpd += 4*(1-dendryUI.kpd_dissent);
    }

    dendryUI.kpd_stalinist_strength += 5;
    
    dendryUI.kpd_stalinist_dissent -= 5;

    dendryUI.old_middle_kpd -= 3;
    dendryUI.new_middle_kpd -= 2;
    
    dendryUI.rfb_force += 4*(1-dendryUI.kpd_dissent);
};

window.kpd_rally_councils = function() {
    dendryUI.unemployed_kpd += 3*(1-dendryUI.kpd_dissent);

    if (dendryUI.socializations) {
        dendryUI.unemployed_kpd += 3*(1-dendryUI.kpd_dissent);
        dendryUI.workers_kpd += 3*(1-dendryUI.kpd_dissent);
    }

    if (dendryUI.socializations > 1) {
        dendryUI.workers_kpd += 4*(1-dendryUI.kpd_dissent);
    }
    
    dendryUI.kpd_brandlerite_strength += 3;
    dendryUI.kpd_conciliator_strength += 4;

    dendryUI.kpd_conciliator_dissent -= 3;
    dendryUI.kpd_brandlerite_dissent -= 3;

    dendryUI.rfb_force += 4*(1-dendryUI.kpd_dissent);
};

window.kpd_rally_pacifism = function() {
    dendryUI.kpd_pacifism += 1;
    dendryUI.nationalism -= 3*(1 - dendryUI.kpd_dissent);

    if (dendryUI.kpd_pacifism >= 3) {
        dendryUI.unemployed_kpd += 2*(1-dendryUI.kpd_dissent);
        dendryUI.workers_kpd += 1*(1-dendryUI.kpd_dissent);
        dendryUI.new_middle_kpd += 1*(1-dendryUI.kpd_dissent);

        dendryUI.nationalism -= 3*(1-dendryUI.kpd_dissent);
        
        if (dendryUI.nationalism <= 50) {
            dendryUI.kpd_conciliator_strength += 3
        }
    }
};

window.kpd_rally_democracy = function() {
    dendryUI.kpd_democratization += 1;
    dendryUI.pro_republic += 3*(1-dendryUI.kpd_dissent);
    if (dendryUI.kpd_democratization >= 3) {
        dendryUI.unemployed_kpd += 2*(1-dendryUI.kpd_dissent);
        dendryUI.workers_kpd += 1*(1-dendryUI.kpd_dissent);
        dendryUI.new_middle_kpd += 1*(1-dendryUI.kpd_dissent);
    }
    
    if (dendryUI.pro_republic >= 70) {
        dendryUI.kpd_brandlerite_strength += 3;
    }
};

window.kpd_rally_wtb = function() {
    dendryUI.unemployed_kpd += 5*(1-dendryUI.kpd_dissent);
    dendryUI.workers_kpd += 4*(1-dendryUI.kpd_dissent);
    dendryUI.new_middle_kpd += 2*(1-dendryUI.kpd_dissent);

    if (dendryUI.wtb_implemented) {
        dendryUI.unemployed_kpd += 4*(1-dendryUI.kpd_dissent);
        dendryUI.workers_kpd += 3*(1-dendryUI.kpd_dissent);
        dendryUI.new_middle_kpd += 2*(1-dendryUI.kpd_dissent);
        dendryUI.rural_kpd += 1*(1-dendryUI.kpd_dissent);
    }
    
    dendryUI.kpd_wtb_rally += 1;
};

window.kpd_rally_local = function() {
    unemployed_kpd += 4*(1-kpd_dissent);
    workers_kpd += 3*(1-kpd_dissent);
    new_middle_kpd += 2*(1-kpd_dissent);
};
window.kpd_media = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('kpd media');
    if (Q.kpd_leader == "Thälmann") {
        if (Q.kpd_stalinist_strength < 80) {
            window.kpd_media_ideological();
        } else if (Q.year >= 1930 && Q.anticommunist_force >= 30 && !Q.return_to_normalcy) {
            window.kpd_media_mobilize();
        } else {
            window.kpd_media_campaign();
        }
    } else if (Q.kpd_leader == "Conciliators") {
        if (Q.kpd_conciliator_strength < 70) {
            window.kpd_media_ideological();
        } else if (Q.year >= 1930 && Q.noncommunist_force >= Q.rfb_force && !Q.return_to_normalcy) {
            window.kpd_media_mobilize();
        } else {
            window.kpd_media_campaign();
        }
    } else if (Q.kpd_leader == "Brandlerites") {
        if (Q.kpd_brandlerite_strength < 60) {
            window.kpd_media_ideological();
        } else if (Q.year >= 1930 && Q.anticommunist_force >= Q.left_force && !Q.return_to_normalcy) {
            window.kpd_media_mobilize();
        } else if (Q.kpd_radio == 0) {
            if (Q.kpd_resources >= 2) {
                window.kpd_media_radio();
            } else {
                window.kpd_media_ideological();
            }
        } else if (Q.kpd_radio > 3 && Q.kpd_radio <= 5 && Q.year <= 1931) {
            window.kpd_media_radio_3();
        } else if (Q.kpd_resources >= 1) {
            if (Q.kpd_radio > 0 && Q.kpd_radio <= 3) {
                window.kpd_media_radio_2();
            } else if (Q.kpd_radio > 3 && (Q.radio >= 6 || Q.year >= 1932) && Q.kpd_radio <= 9) {
                window.kpd_media_radio_4();
            } else {
                window.kpd_media_ideological();
            }
        } else {
            window.kpd_media_ideological();
        }
    }
};

window.kpd_media_mobilize = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.rfb_strength += 50;
    Q.rfb_militancy += 0.02;
    
    if (Q.kpd_wholesome) {
        Q.workers_nsdap -= 1*(1-Q.kpd_dissent);
        Q.unemployed_nsdap -= 2*(1-Q.kpd_dissent);
    } else {
        Q.workers_spd -= 1*(1-Q.kpd_dissent);
        Q.unemployed_spd -= 2*(1-Q.kpd_dissent);
    }

    if (Q.dnf_formed) {
        Q.workers_dnf -= 1*(1-Q.kpd_dissent);
        Q.unemployed_dnf -= 2*(1-Q.kpd_dissent);
    } else {
        Q.workers_dnvp -= 1*(1-Q.kpd_dissent);
        Q.unemployed_dnvp -= 2*(1-Q.kpd_dissent);
    }

    Q.workers_kpd += 1*(1-Q.kpd_dissent);
    Q.unemployed_kpd += 2*(1-Q.kpd_dissent);
};

window.kpd_media_campaign = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.workers_kpd += 2*(1-Q.kpd_dissent);
    Q.unemployed_kpd += 4*(1-Q.kpd_dissent);
};

window.kpd_media_ideological = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    if (Q.kpd_leader == "Thälmann") {
        Q.kpd_stalinist_strength += 3;
        Q.kpd_weddinger_strength -= 3;
        Q.kpd_conciliator_strength -= 3;
        Q.kpd_brandlerite_strength -= 3;

        Q.kpd_stalinist_dissent -= 10;
    } else if (Q.kpd_leader == "Conciliators") {
        Q.kpd_conciliator_strength += 3;
        Q.kpd_weddinger_strength -= 3;
        Q.kpd_stalinist_strength -= 3;
        Q.kpd_brandlerite_strength -= 3;

        Q.kpd_conciliator_dissent -= 10;
    } else if (Q.kpd_leader == "Brandlerites") {
        Q.kpd_brandlerite_strength += 3;
        Q.kpd_conciliator_strength -= 3;
        Q.kpd_weddinger_strength -= 3;
        Q.kpd_stalinist_strength -= 3;

        Q.kpd_brandlerite_dissent -= 10;
    } else if (Q.kpd_leader == "Weddingers") {
        Q.kpd_weddinger_strength += 3;
        Q.kpd_conciliator_strength -= 3;
        Q.kpd_stalinist_strength += 3;
        Q.kpd_brandlerite_strength -= 3;

        Q.kpd_weddinger_dissent -= 10;
    }
};

window.kpd_media_radio = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kpd_radio += 1;
    Q.kpd_resources -= 2;
    
    Q.new_middle_kpd += 2*(1 - Q.kpd_dissent);
    Q.old_middle_kpd += 1*(1 - Q.kpd_dissent);
    Q.workers_kpd += 2*(1 - Q.kpd_dissent);

    Q.kpd_weddinger_dissent += 10;
    Q.kpd_stalinist_dissent += 10;
    Q.kpd_conciliator_dissent += 5;

    Q.socialism += 4*(1 - Q.kpd_dissent); 
    Q.nationalism -= 1*(1 - Q.kpd_dissent);

    if (Q.kpd_pacifism > 1) {
        Q.nationalism -= 2*(1 - Q.kpd_dissent);
    }
};

window.kpd_media_radio_2 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kpd_radio += 1;
    Q.kpd_resources -= 1;

    Q.new_middle_kpd += 3*(1 - Q.kpd_dissent);
    Q.old_middle_kpd += 1*(1 - Q.kpd_dissent);
    
    Q.workers_kpd += 3*(1 - Q.kpd_dissent);
    
    Q.socialism += 4*(1 - Q.kpd_dissent);
    Q.nationalism -= 1*(1 - Q.kpd_dissent);
    
    if (Q.kpd_pacifism > 2) {
        Q.nationalism -= 2*(1 - Q.kpd_dissent) * (Q.kpd_pacifism - 2);
    }
};

window.kpd_media_radio_3 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kpd_radio += 1;

    Q.new_middle_kpd += 3*(1 - Q.kpd_dissent);
    Q.old_middle_kpd += 2*(1 - Q.kpd_dissent);
    Q.rural_kpd += 1*(1 - Q.kpd_dissent);
    
    Q.workers_kpd += 3*(1 - Q.kpd_dissent);
    Q.unemployed_kpd += 2*(1 - Q.kpd_dissent);
    
    Q.socialism += 4*(1 - Q.kpd_dissent);
    Q.nationalism -= 1*(1 - Q.kpd_dissent);
    
    if (Q.kpd_pacifism > 2) {
        Q.nationalism -= 2*(1 - Q.kpd_dissent) * (Q.kpd_pacifism - 2);
    }
};

window.kpd_media_radio_4 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.kpd_radio += 1;
    Q.kpd_resources -= 1;
    
    Q.new_middle_kpd += 3*(1 - Q.kpd_dissent);
    Q.old_middle_kpd += 2*(1 - Q.kpd_dissent);
    Q.rural_kpd += 1*(1 - Q.kpd_dissent);
    
    Q.workers_kpd += 3*(1 - Q.kpd_dissent);
    Q.unemployed_kpd += 2*(1 - Q.kpd_dissent);
    
    Q.socialism += 3*(1 - Q.kpd_dissent);
    Q.nationalism -= 1*(1 - Q.kpd_dissent);
    
    if (Q.kpd_pacifism > 2) {
        Q.nationalism -= 2*(1 - Q.kpd_dissent) * (Q.kpd_pacifism - 2);
    }

};
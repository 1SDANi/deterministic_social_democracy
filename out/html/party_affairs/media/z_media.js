window.z_media = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('z media');
    
    Q.z_media_timer += 6;
    Q.z_media_post_timer = 1;

    if (Q.z_dissent > 0.2) {
        window.z_media_ideological();
    } else if (Q.z_newspaper == 0 && Q.z_resources >= 3) {
        window.z_media_newspaper();
    } else if (Q.z_newspaper > 0 && Q.z_newspaper <= 2 && Q.z_resources >= 2) {
        window.z_media_newspaper_2();
    } else if (Q.z_newspaper > 2 && Q.z_newspaper <= 5 && Q.z_resources >= 2) {
        window.z_media_newspaper_3();
    } else if (Q.z_newspaper > 5 && Q.catholics_z < 50) {
        window.z_media_campaign();
    } else if (Q.z_newspaper > 5) {
        window.z_media_newspaper_4();
    } else {
        window.z_media_campaign();
    }
};

window.z_media_campaign = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.workers_z += 1*(1-Q.z_dissent);
    Q.unemployed_z += 1*(1-Q.z_dissent);
    Q.new_middle_z += 1*(1-Q.z_dissent);
    Q.old_middle_z += 1*(1-Q.z_dissent);
    
    Q.catholics_z += 2*(1-Q.z_dissent);

    if (Q.prussian_concordat_progress) {
        Q.catholics_z += 1*(1-Q.z_dissent);
    }

    if (Q.prussian_concordat) {
        Q.catholics_z += 1*(1-Q.z_dissent);
    }

    if (Q.reichskonkordat_progress) {
        Q.catholics_z += 2*(1-Q.z_dissent);
    }

    if (Q.reichskonkordat) {
        Q.catholics_z += 2*(1-Q.z_dissent);
    }
};

window.z_media_ideological = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_left_dissent -= 6;
    Q.z_labor_dissent -= 6;
    Q.z_center_dissent -= 6;
    Q.z_conservative_dissent -= 6;
};

window.z_media_newspaper = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_newspaper += 1;

    Q.z_resources -= 3;

    Q.workers_z += 1*(1-Q.z_dissent);
    Q.unemployed_z += 1*(1-Q.z_dissent);
    Q.new_middle_z += 2*(1-Q.z_dissent);
    Q.old_middle_z += 2*(1-Q.z_dissent);
    Q.rural_z += 1*(1-Q.z_dissent);
    Q.catholics_z += 2*(1-Q.z_dissent);
};

window.z_media_newspaper_2 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_newspaper += 1;

    Q.z_resources -= 2;

    Q.workers_z += 2*(1-Q.z_dissent);
    Q.unemployed_z += 1*(1-Q.z_dissent);
    Q.new_middle_z += 2*(1-Q.z_dissent);
    Q.old_middle_z += 2*(1-Q.z_dissent);
    Q.rural_z += 2*(1-Q.z_dissent);
    Q.catholics_z += 3*(1-Q.z_dissent);
};

window.z_media_newspaper_3 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_newspaper += 1;

    Q.z_resources -= 1;

    Q.workers_z += 2*(1-Q.z_dissent);
    Q.unemployed_z += 1*(1-Q.z_dissent);
    Q.new_middle_z += 2*(1-Q.z_dissent);
    Q.old_middle_z += 2*(1-Q.z_dissent);
    Q.rural_z += 8*(1-Q.z_dissent);
    Q.catholics_z += 3*(1-Q.z_dissent);
};

window.z_media_newspaper_4 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;
    
    Q.z_newspaper += 1;

    Q.workers_z += 2*(1-Q.z_dissent);
    Q.unemployed_z += 1*(1-Q.z_dissent);
    Q.new_middle_z += 2*(1-Q.z_dissent);
    Q.old_middle_z += 2*(1-Q.z_dissent);
    Q.rural_z += 2*(1-Q.z_dissent);
    Q.catholics_z += 3*(1-Q.z_dissent);
};
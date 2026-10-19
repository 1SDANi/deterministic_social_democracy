window.ddp_media = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    console.log('ddp media');

    var heuss = ddp_regionalist_strength + ddp_business_strength > ddp_labor_strength + ddp_liberal_strength;
    var quide = (ddp_labor_strength + ddp_liberal_strength > ddp_regionalist_strength + ddp_business_strength) && !(ddp_labor_strength > ddp_regionalist_strength + ddp_business_strength + ddp_liberal_strength);
    var baumer = ddp_liberal_strength + ddp_regionalist_strength > ddp_business_strength + ddp_labor_strength;
    var erkelenz = ddp_labor_strength > ddp_regionalist_strength + ddp_business_strength + ddp_liberal_strength;

    if (Q.ddp_dissent > 0.2) {
        window.ddp_media_debate();
    } else if (!Q.ddp_newspaper_founded && Q.ddp_resources >= 2 && (heuss || erkelenz) && Q.berliner_tegeblatt >= 5) {
        window.ddp_media_partymedia();
    } else if (!Q.ddp_newspaper_founded && Q.ddp_resources >= 2 && (quide || erkelenz) && Q.die_hilfe >= 3) {
        window.ddp_media_partymedia();
    } else if (!Q.ddp_newspaper_founded && Q.ddp_resources >= 2 && (baumer || erkelenz) && Q.die_hilfe >= 1) {
        window.ddp_media_partymedia();
    } else if (Q.ddp_newspaper_founded && (Q.ddp_newspaper_editor == "Heuss" || Q.ddp_newspaper_editor == "Erkelenz") && Q.dh_integrated == 0 && Q.die_hilfe >= 1) {
        window.ddp_media_integrate1();
    } else if (Q.ddp_newspaper_founded && (Q.ddp_newspaper_editor == "Quide" || Q.ddp_newspaper_editor == "Erkelenz") && Q.jd_integrated == 0 && Q.junge_demokratie >= 3 && Q.ddp_resources >= 1) {
        window.ddp_media_integrate2();
    } else if (Q.ddp_newspaper_founded && (Q.ddp_newspaper_editor == "Bäumer" || Q.ddp_newspaper_editor == "Erkelenz") && Q.bt_integrated == 0 && Q.berliner_tegeblatt >= 5 && Q.ddp_resources >= 3) {
        window.ddp_media_integrate3();
    } else if (Q.ddp_newspaper_founded && (Q.ddp_newspaper_editor == "Heuss" || Q.ddp_newspaper_editor == "Erkelenz") && Q.dh_integrated == 0 && Q.ddp_resources >= 1) {
        window.ddp_media_diehilfe();
    } else if (Q.ddp_newspaper_founded && (Q.ddp_newspaper_editor == "Quide" || Q.ddp_newspaper_editor == "Erkelenz") && Q.jd_integrated == 0 && Q.ddp_resources >= 1) {
        window.ddp_media_echoderjungedemokratie();
    } else if (Q.ddp_newspaper_founded && (Q.ddp_newspaper_editor == "Bäumer" || Q.ddp_newspaper_editor == "Erkelenz") && Q.bt_integrated == 0 && Q.ddp_resources >= 1) {
        window.ddp_media_berlinertagblad();
    } else if (!Q.ddp_newspaper_founded && (heuss || erkelenz) && Q.ddp_resources >= 1) {
        window.ddp_media_diehilfe();
    } else if (!Q.ddp_newspaper_founded && (quide || erkelenz) && Q.ddp_resources >= 1) {
        window.ddp_media_echoderjungedemokratie();
    } else if (!Q.ddp_newspaper_founded && (Bsumer || Erkelenz) && Q.ddp_resources >= 1) {
        window.ddp_media_berlinertagblad();
    } else if (Q.ddp_resources >= 1 || ddp_newspaper >= 3) {
        window.ddp_media_bolsterpartymedia();
    } else {
        window.ddp_media_debate();
    }
};

window.ddp_media_berlinertagblad = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.resources -= 1;
    Q.berliner_tegeblatt += 1;

    Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.workers_ddp += 1*(1-Q.ddp_dissent);
    
    Q.ddp_business_strength += 4;

    Q.pro_republic += 4*(1-Q.ddp_dissent);
    Q.socialism -= 2*(1-Q.ddp_dissent);
};

window.ddp_media_diehilfe = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.resources -= 1;
    Q.die_hilfe += 1;

    Q.ddp_liberal_strength += 4*(1-Q.ddp_dissent);
    
    Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.workers_ddp += 1*(1-Q.ddp_dissent);
    Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
};

window.ddp_media_echoderjungedemokratie = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.resources -= 1;
    Q.junge_demokratie += 1;

    Q.ddp_labor_strength += 4*(1-Q.ddp_dissent);

    Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
    Q.workers_ddp += 2*(1-Q.ddp_dissent);
    Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
    
    Q.pro_republic += 3*(1-Q.ddp_dissent);
    Q.nationalism -= 3*(1-Q.ddp_dissent);
};

window.ddp_media_integrate1 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    if (Q.die_hilfe >= 1) {
        Q.resources -= 1;
    }

    Q.ddp_resources += 2;

    Q.dh_integrated = 1;

    Q.ddp_liberal_strength += 4*(1-Q.ddp_dissent);

    Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.workers_ddp += 1*(1-Q.ddp_dissent);
    Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
};

window.ddp_media_integrate2 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    if (Q.junge_demokratie >= 3) {
        Q.resources -= 1;
    } else {
        Q.resources -= 2;
    }
    
    Q.jd_integrated = 1;

    Q.ddp_labor_strength += 4*(1-Q.ddp_dissent);

    Q.new_middle_ddp += 4*(1-Q.ddp_dissent);
    Q.workers_ddp += 3*(1-Q.ddp_dissent);
    Q.unemployed_ddp += 2*(1-Q.ddp_dissent);
    
    Q.pro_republic += 3*(1-Q.ddp_dissent);
    Q.nationalism -= 3*(1-Q.ddp_dissent);
};

window.ddp_media_integrate3 = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    if (Q.berliner_tegeblatt >= 5) {
        Q.resources -= 3;
    } else {
        Q.resources -= 5;
    }

    Q.bt_integrated = 1;

    Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.workers_ddp += 1*(1-Q.ddp_dissent);
    
    Q.ddp_business_strength += 4;

    Q.pro_republic += 8*(1-Q.ddp_dissent);
    Q.socialism -= 4*(1-Q.ddp_dissent);
};

window.ddp_media_bolsterpartymedia = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    if (Q.ddp_newspaper < 3) {
        Q.ddp_resources -= 1;
    }
    
    Q.ddp_newspaper += 1;
    
    if (Q.ddp_newspaper_editor == "Heuss") {
        Q.ddp_business_strength += 4;

        Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
        Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
        Q.workers_ddp += 1*(1-Q.ddp_dissent);
    
        Q.pro_republic += 3*(1-Q.ddp_dissent);
        Q.nationalism -= 3*(1-Q.ddp_dissent);
    } else if (Q.ddp_newspaper_editor == "Bäumer") {
        Q.ddp_liberal_strength += 4*(1-Q.ddp_dissent);
    
        Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
        Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
        Q.workers_ddp += 1*(1-Q.ddp_dissent);
        Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
    } else if (Q.ddp_newspaper_editor == "Quide") {
        Q.ddp_labor_strength += 4*(1-Q.ddp_dissent);

        Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
        Q.workers_ddp += 2*(1-Q.ddp_dissent);
        Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
        
        Q.pro_republic += 3*(1-Q.ddp_dissent);
        Q.nationalism -= 3*(1-Q.ddp_dissent);
    } else if (Q.ddp_newspaper_editor == "Erkelenz") {
        Q.ddp_labor_strength += 4*(1-Q.ddp_dissent);

        Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
        Q.workers_ddp += 2*(1-Q.ddp_dissent);
        Q.unemployed_ddp += 2*(1-Q.ddp_dissent);
        
        Q.pro_republic += 3*(1-Q.ddp_dissent);
        Q.nationalism -= 3*(1-Q.ddp_dissent);
    }

    if (Q.bt_integrated) {
        Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
        Q.old_middle_ddp += 1*(1-Q.ddp_dissent);
    }

    if (Q.dh_integrated) {
        Q.new_middle_ddp += 1*(1-Q.ddp_dissent);
        Q.workers_ddp += 1*(1-Q.ddp_dissent);
    }

    if (Q.jd_integrated) {
        Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
    }
};

window.ddp_media_debate = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_business_strength -= 6;
    Q.ddp_regionalist_strength -= 6;
    Q.ddp_liberal_strength -= 6;
    Q.ddp_labor_strength -= 6;
};

window.ddp_media_partymedia = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_newspaper_founded = 1;
    Q.resources -= 2;

    if (Q.ddp_regionalist_strength + Q.ddp_business_strength > Q.ddp_labor_strength + Q.ddp_liberal_strength) {
        window.ddp_media_heuss()
    } else if (Q.ddp_liberal_strength + Q.ddp_regionalist_strength > Q.ddp_business_strength + Q.ddp_labor_strength) {
        window.ddp_media_baumer()
    } else if (Q.ddp_labor_strength > Q.ddp_regionalist_strength + Q.ddp_business_strength + Q.ddp_liberal_strength) {
        window.ddp_media_erkelenz()
    } else if (Q.ddp_labor_strength + Q.ddp_liberal_strength > Q.ddp_regionalist_strength + Q.ddp_business_strength) {
        window.ddp_media_quide()
    }
};

window.ddp_media_heuss = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_newspaper_editor = "Heuss";

    Q.ddp_business_strength += 4;

    Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 3*(1-Q.ddp_dissent);
    Q.workers_ddp += 2*(1-Q.ddp_dissent);

    Q.pro_republic += 3*(1-Q.ddp_dissent);
    Q.nationalism -= 3*(1-Q.ddp_dissent);
};

window.ddp_media_quide = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_newspaper_editor = "Quide";

    Q.ddp_liberal_strength += 4*(1-Q.ddp_dissent);
    
    Q.new_middle_ddp += 3*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 3*(1-Q.ddp_dissent);
    Q.workers_ddp += 1*(1-Q.ddp_dissent);
    Q.unemployed_ddp += 1*(1-Q.ddp_dissent);
};

window.ddp_media_baumer = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_newspaper_editor = "Bäumer";
    
    Q.ddp_labor_strength += 4*(1-Q.ddp_dissent);

    Q.new_middle_ddp += 4*(1-Q.ddp_dissent);
    Q.workers_ddp += 2*(1-Q.ddp_dissent);
    Q.unemployed_ddp += 2*(1-Q.ddp_dissent);
    
    Q.pro_republic += 3*(1-Q.ddp_dissent);
    Q.nationalism -= 3*(1-Q.ddp_dissent);
};

window.ddp_media_erkelenz = function() {
    const Q = window.dendryUI?.dendryEngine?.state?.qualities;

    Q.ddp_newspaper_editor = "Erkelenz";

    Q.ddp_labor_strength += 4*(1-Q.ddp_dissent);

    Q.new_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.old_middle_ddp += 2*(1-Q.ddp_dissent);
    Q.workers_ddp += 2*(1-Q.ddp_dissent);
    Q.unemployed_ddp += 2*(1-Q.ddp_dissent);
    
    Q.pro_republic += 3*(1-Q.ddp_dissent);
    Q.nationalism -= 3*(1-Q.ddp_dissent);
};
window.addEventListener("load", function() {
    const form = document.getElementById('badanie');
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener("click", function() {
        const data = new FormData(form);

// Metryczka
        const cywilny = Number(data.get('cywilny'));
        const zaw = Number(data.get('zawód'));

        const szwd = Number(data.get('zwDni'));
        const szwt = Number(data.get('zwTyg'));
        const szwm = Number(data.get('zwMsc'));
        const szwy = Number(data.get('zwRok'));
            if (cywilny == 1 || cywilny == 2 || cywilny == 6 || cywilny == 7)
                { var staZw = -(szwd + (szwt * 7) + (szwm * 30.417) + (szwy * 365.3)) }
                else
                { var staZw = szwd + (szwt * 7) + (szwm * 30.417) + (szwy * 365.3) };
                data.append('staż związku', Math.round(staZw));
        const szad = Number(data.get('zaDni'));
        const szat = Number(data.get('zaTyg'));
        const szam = Number(data.get('zaMsc'));
        const szay = Number(data.get('zaRok'));
            if (zaw == 0)
                { var staZa = -(szad + (szat * 7) + (szam * 30.417) + (szay * 365.3)) }
                else
                { var staZa = szad + (szat * 7) + (szam * 30.417) + (szay * 365.3) };
                data.append('staż zatrudnienia', Math.round(staZa));
            
            if (zaw == 0)
                { data.set('stanPrac', '') & data.set('stanStud', '') & data.set('stypendium', '') }
                else if (zaw == 1)
                { data.set('stanStud', '') & data.set('stypendium', '') }
                else { data.set('stanPrac', '') };



// PIL

    // deklarowanie pozycji
        const pil1 = Number(data.get('pil1'));
        const pil2 = Number(data.get('pil2'));
        const pil3 = Number(data.get('pil3'));
        const pil4 = Number(data.get('pil4'));
        const pil5 = Number(data.get('pil5'));
        const pil6 = Number(data.get('pil6'));
        const pil7 = Number(data.get('pil7'));
        const pil8 = Number(data.get('pil8'));
        const pil9 = Number(data.get('pil9'));
        const pil10 = Number(data.get('pil10'));
        const pil11 = Number(data.get('pil11'));
        const pil12 = Number(data.get('pil12'));
        const pil13 = Number(data.get('pil13'));
        const pil14 = Number(data.get('pil14'));
        const pil15 = Number(data.get('pil15'));
        const pil16 = Number(data.get('pil16'));
        const pil17 = Number(data.get('pil17'));
        const pil18 = Number(data.get('pil18'));
        const pil19 = Number(data.get('pil19'));
        const pil20 = Number(data.get('pil20'));

    // PIL – Afirmacja życia
        const life = pil2 + pil4 + pil5 + pil6 + pil8 + pil9 + pil10 + pil19;
    data.append('afirmacja', life);

    // PIL – Akceptacja siebie
        const self = pil1 + pil12 + pil13;
    data.append('akceptacja', self);

    // PIL – Świadomość celu
        const goal = pil3 + pil11 + pil20;
    data.append('cel', goal);

    // PIL – Poczucie wolności
        const free = pil14 + pil18;
    data.append('wolność', free);

    // PIL – Ocena przyszłości
        const future = pil7 + pil17;
    data.append('przyszłość', future);

    // PIL – Stosunek wobec śmierci
        const death = pil15 + pil16;
    data.append('śmierć', death);

    // PIL – Jednoczynnikowy
        const jedno = pil4 + pil5 + pil9 + pil12 + pil17 + pil20;
    data.append('jedno', jedno);

    // PIL – Suma
        const pilAll = [
            pil1, pil2, pil3, pil4, pil5, pil6, pil7, pil8, pil9, pil10,
            pil11, pil12, pil13, pil14, pil15, pil16, pil17, pil18, pil19, pil20
        ];
    data.append('pilSuma', pilAll.reduce( (total, curr) => total + curr ));



// SBS

    // deklarowanie i przeliczanie pozycji odwróconych
        const sbs1 = Number(data.get('sbs1'));
        const sbs2 = Number(data.get('sbs2'));
        const sbs3 = Number(data.get('sbs3'));
        const sbs4 = Number(data.get('sbs4'));
        const sbs5 = Number(data.get('sbs5'));
        const sbs6 = Number(data.get('sbs6'));
        const sbs7 = Number(data.get('sbs7'));
        const sbs8 = Number(data.get('sbs8'));
        const sbs9 = Number(data.get('sbs9'));
        const sbs10 = Number(data.get('sbs10'));
        const sbs11 = Number(data.get('sbs11'));
        const sbs12 = Number(data.get('sbs12'));
        const sbs13 = Number(data.get('sbs13'));
        const sbs14 = Number(data.get('sbs14'));
        const sbs15 = Number(data.get('sbs15'));
        const sbs16 = Number(data.get('sbs16'));
        const sbs17 = Number(data.get('sbs17'));
        const sbs18 = Number(data.get('sbs18'));
        const sbs19 = Number(data.get('sbs19'));
        const sbs20 = Number(data.get('sbs20'));
        const sbs21 = Number(data.get('sbs21'));
        const sbs22 = Number(data.get('sbs22'));
        const sbs23 = Number(data.get('sbs23'));
        const sbs24 = Number(data.get('sbs24'));
        const sbs25 = 5 - Number(data.get('sbs25-r'));
            data.append('sbs25', sbs25);
        const sbs26 = Number(data.get('sbs26'));
        const sbs27 = Number(data.get('sbs27'));
        const sbs28 = Number(data.get('sbs28'));
        const sbs29 = Number(data.get('sbs29'));
        const sbs30 = Number(data.get('sbs30'));
        const sbs31 = Number(data.get('sbs31'));

    // SBS – Samotność społeczna
        const ssp = sbs1 + sbs2 + sbs3 + sbs4 + sbs5 + sbs6 + sbs7 + sbs8 + sbs9 + sbs10;
    data.append('s_społeczna', ssp);

    // SBS – Samotność emocjonalna
        const sem = sbs11 + sbs12 + sbs13 + sbs14 + sbs15 + sbs16 + sbs17 + sbs18 + sbs19 + sbs20 + sbs21;
    data.append('s_emocjonalna', sem);

    // SBS – Samotność egzystencjalna
        const seg = sbs22 + sbs23 + sbs24 + sbs25 + sbs26 + sbs27 + sbs28 + sbs29 + sbs30 + sbs31;
    data.append('s_egzystencjalna', seg);

    // SBS – Suma
        const sbsAll = [
            sbs1, sbs2, sbs3, sbs4, sbs5, sbs6, sbs7, sbs8, sbs9, sbs10, sbs11,
            sbs12, sbs13, sbs14, sbs15, sbs16, sbs17, sbs18, sbs19, sbs20, sbs21,
            sbs22, sbs23, sbs24, sbs25, sbs26, sbs27, sbs28, sbs29, sbs30, sbs31
        ];
    data.append('sbsSuma', sbsAll.reduce( (total, curr) => total + curr ));


// DIDS

    // deklarowanie i przeliczanie pozycji odwróconych
        const dids1 = Number(data.get('dids1'));
        const dids2 = Number(data.get('dids2'));
        const dids3 = Number(data.get('dids3'));
        const dids4 = Number(data.get('dids4'));
        const dids5 = Number(data.get('dids5'));
        const dids6 = Number(data.get('dids6'));
        const dids7 = Number(data.get('dids7'));
        const dids8 = Number(data.get('dids8'));
        const dids9 = Number(data.get('dids9'));
        const dids10 = Number(data.get('dids10'));
        const dids11 = Number(data.get('dids11'));
        const dids12 = Number(data.get('dids12'));
        const dids13 = Number(data.get('dids13'));
        const dids14 = Number(data.get('dids14'));
        const dids15 = Number(data.get('dids15'));
        const dids16 = Number(data.get('dids16'));
        const dids17 = Number(data.get('dids17'));
        const dids18 = Number(data.get('dids18'));
        const dids19 = Number(data.get('dids19'));
        const dids20 = Number(data.get('dids20'));
        const dids21 = Number(data.get('dids21'));
        const dids22 = Number(data.get('dids22'));
        const dids23 = Number(data.get('dids23'));
        const dids24 = Number(data.get('dids24'));
        const dids25 = Number(data.get('dids25'));

    // DIDS – Podjęcie zobowiązania
        const dpz = dids1 + dids2 + dids3 + dids4 + dids5;
    data.append('dids_podjęcie', dpz);

    // DIDS – Eksploracja wszerz 6-10
        const dew = dids6 + dids7 + dids8 + dids9 + dids10;
    data.append('dids_wszerz', dew);

    // DIDS – Eksploracja ruminacyjna 11-15
        const der = dids11 + dids12 + dids13 + dids14 + dids15;
    data.append('dids_ruminacyjna', der);

    // DIDS – Identyfikacja ze zobowiązaniem 16-20
        const diz = dids16 + dids17 + dids18 + dids19 + dids20;
    data.append('dids_identyfikacja', diz);

    // DIDS – Eksploracja w głąb 21-25
        const deg = dids21 + dids22 + dids23 + dids24 + dids25;
    data.append('dids_wgłąb', deg);



// sending data to Google Spreadsheet
        const action = 'https://script.google.com/macros/s/AKfycbwlyAffFlOfn7cResi31AszsGxLtADjRzzh7EBQKVOgQjS-arxjCEIPCQlug_qJgoMh/exec';
        fetch(action, {
        method: 'POST',
        body: data,
        })

        localStorage.clear();
    });
  });
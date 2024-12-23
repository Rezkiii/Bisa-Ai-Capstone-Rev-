document.addEventListener('DOMContentLoaded', () => {
    // Tombol untuk membuka modal Cryptography
    const openModalButtons = document.querySelectorAll('.open-modal');
    // Tombol untuk membuka modal Number
    const openModalNumberButtons = document.querySelectorAll('.open-modal-number');
    // Tombol untuk menutup modal
    const closeModalButtons = document.querySelectorAll('.close-modal');
    // Modal Cryptography
    const modalCryptography = document.getElementById('modal-cryptography');
    // Modal Number
    const modalNumber = document.getElementById('modal-number');
    // Modal Fusion
   

    // Membuka modal Cryptography
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalCryptography.classList.add('active');
        });
    });

    // Membuka modal Number
    openModalNumberButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalNumber.classList.add('active');
        });
    });

        // Tombol untuk membuka modal SuperBasic
    const openModalSuperBasicButtons = document.querySelectorAll('.open-modal-superbasic');
    // Modal SuperBasic
    const modalSuperBasic = document.getElementById('modal-superbasic');

    // Membuka modal SuperBasic
    openModalSuperBasicButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalSuperBasic.classList.add('active');
        });
    });

    // Menutup modal saat klik di luar konten modal
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-overlay')) {
            modalSuperBasic.classList.remove('active');
        }
    });


        // Tombol untuk membuka modal 
        const openModalFusionButtons = document.querySelectorAll('.open-modal-fusion');
        // Modal 
        const modalFusion = document.getElementById('modal-fusion');
    
        // Membuka modal Fusion
        openModalFusionButtons.forEach(button => {
            button.addEventListener('click', () => {
                modalFusion.classList.add('active');
            });
        });

        // Tombol untuk membuka modal 
        const openModalMorseButtons = document.querySelectorAll('.open-modal-morse');
        // Modal 
        const modalMorse = document.getElementById('modal-morse');
    
        // Membuka modal Fusion
        openModalMorseButtons.forEach(button => {
            button.addEventListener('click', () => {
                modalMorse.classList.add('active');
            });
        });

        // Tombol untuk membuka modal 
        const openModalRepetitionButtons = document.querySelectorAll('.open-modal-repetition');
        // Modal 
        const modalRepetition = document.getElementById('modal-repetition');
    
        // Membuka modal Fusion
        openModalRepetitionButtons.forEach(button => {
            button.addEventListener('click', () => {
                modalRepetition.classList.add('active');
            });
        });

          // Tombol untuk membuka modal 
          const openModalCatButtons = document.querySelectorAll('.open-modal-cat');
          // Modal 
          const modalCat = document.getElementById('modal-cat');
      
          // Membuka modal Fusion
          openModalCatButtons.forEach(button => {
              button.addEventListener('click', () => {
                  modalCat.classList.add('active');
              });
          });

        
    
        // Menutup modal saat klik di luar konten modal
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('modal-overlay')) {
                modalFusion.classList.remove('active');
            }
        });

        // Tombol untuk membuka modal 
        const openModalPesanButtons = document.querySelectorAll('.open-modal-pesan');
        // Modal 
        const modalPesan = document.getElementById('modal-pesan');
    
        // Membuka modal Fusion
        openModalPesanButtons.forEach(button => {
            button.addEventListener('click', () => {
                modalPesan.classList.add('active');
            });
        });

         // Tombol untuk membuka modal 
         const openModalHiuButtons = document.querySelectorAll('.open-modal-hiu');
         // Modal 
         const modalHiu = document.getElementById('modal-hiu');
     
         // Membuka modal Fusion
         openModalHiuButtons.forEach(button => {
             button.addEventListener('click', () => {
                 modalHiu.classList.add('active');
             });
         });

         // Tombol untuk membuka modal 
         const openModalEspButtons = document.querySelectorAll('.open-modal-esp');
         // Modal 
         const modalEsp = document.getElementById('modal-esp');
     
         // Membuka modal Fusion
         openModalEspButtons.forEach(button => {
             button.addEventListener('click', () => {
                 modalEsp.classList.add('active');
             });
         });

         // Tombol untuk membuka modal 
         const openModalFlagButtons = document.querySelectorAll('.open-modal-flag');
         // Modal 
         const modalFlag = document.getElementById('modal-flag');
     
         // Membuka modal Fusion
         openModalFlagButtons.forEach(button => {
             button.addEventListener('click', () => {
                 modalFlag.classList.add('active');
             });
         });

         // Tombol untuk membuka modal 
         const openModalXORButtons = document.querySelectorAll('.open-modal-XOR');
         // Modal 
         const modalXOR = document.getElementById('modal-XOR');
     
         // Membuka modal Fusion
         openModalXORButtons.forEach(button => {
             button.addEventListener('click', () => {
                 modalXOR.classList.add('active');
             });
         });

         // Tombol untuk membuka modal 
         const openModalEheButtons = document.querySelectorAll('.open-modal-ehe');
         // Modal 
         const modalEhe = document.getElementById('modal-ehe');
     
         // Membuka modal Fusion
         openModalEheButtons.forEach(button => {
             button.addEventListener('click', () => {
                 modalEhe.classList.add('active');
             });
         });

      
  
      // Menutup modal saat klik di luar konten modal
      document.addEventListener('click', (event) => {
          if (event.target.classList.contains('modal-overlay')) {
              modalFusion.classList.remove('active');
          }
      });
    


    // Menutup semua modal
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalCryptography.classList.remove('active');
            modalNumber.classList.remove('active');
            modalFusion.classList.remove('active');
            modalRepetition.classList.remove('active');
            modalMorse.classList.remove('active');
            modalSuperBasic.classList.remove('active');
            modalHiu.classList.remove('active');
            modalCat.classList.remove('active');
            modalEhe.classList.remove('active');
            modalFlag.classList.remove('active');
            modalXOR.classList.remove('active');
            modalPesan.classList.remove('active');
            modalEsp.classList.remove('active');
            modalFlag.classList.remove('active');
            
        });
    });

    // Menutup modal saat klik di luar konten modal
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-overlay')) {
            modalCryptography.classList.remove('active');
            modalNumber.classList.remove('active');
            modalFusion.classList.remove('active');
            modalRepetition.classList.remove('active');
            modalMorse.classList.remove('active');
            modalSuperBasic.classList.remove('active');
            modalHiu.classList.remove('active');
            modalCat.classList.remove('active');
            modalEhe.classList.remove('active');
            modalFlag.classList.remove('active');
            modalXOR.classList.remove('active');
            modalPesan.classList.remove('active');
            modalEsp.classList.remove('active');
            modalFlag.classList.remove('active');
        }
    });

    // Menghilangkan pesan flash setelah 2 detik
    const flashMessages = document.querySelectorAll('.flash-messages .alert');
    flashMessages.forEach(alert => {
        setTimeout(() => {
            alert.style.opacity = 0;
            setTimeout(() => {
                alert.remove();
            }, 500); // Menunggu transisi hilang (500ms)
        }, 2000); // Pesan hilang setelah 2 detik
    });
});

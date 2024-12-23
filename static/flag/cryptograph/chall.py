def main():
    while True:
        print("Pilih opsi:")
        print("1. Show key")
        print("2. Exit")
        
        choice = input("Masukkan pilihan (1/2): ")
        
        if choice == '1':
            print("Key: Q1MxUkxTMUNQMzRDSA==")  
        elif choice == '2':
            print("Keluar dari program.")
            break
        else:
            print("Pilihan tidak valid. Silakan coba lagi.")

if __name__ == "__main__":
    main()

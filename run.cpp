#include <iostream>
using namespace std;

int main(){
    #ifdef _WIN32
        cout << "Bạn có muốn mở web (y/n): ";
        char c; cin >> c;
        if(c == 'y'){
            system("start powershell -NoExit \"cd backend/ ; node main.js\"");
            system("start powershell -NoExit \"cd frontend/ ; live-server --quiet\"");
            cout << "Đã khởi chạy web..." << endl;
        }
    #else 
        cout << "Không hỗ trợ hệ điều hành này !" << endl;
    #endif
    return 0;
}
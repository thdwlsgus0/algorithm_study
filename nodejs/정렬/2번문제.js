#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int arr[51][51];

int solution(vector<vector<int>> maps, int p, int r) {
    int answer = 0;
    for (int i = 0; i < maps.size(); i++) 
        for (int j = 0; j < maps.size(); j++)
            arr[i][j] = maps[i][j];

    for (int i = 0; i < maps.size(); i++) {
        for (int j = 0; j < maps.size(); j++) {
            int magicClear = 0;
            int LUX = i - 2, LUY = j - 2;
            int RUX = i - 2, RUY = j - 1;
            int LDX = i - 1, LDY = j - 2;
            int RDX = i - 1, RDY = j - 1;

            int check = 0;

            for (int i = LUX; i > LUX - (r / 2); i--) {
                for (int j = LUY; j > LUY - (r / 2) + check; j--) {
                    if (i < 0 || j < 0 || i >= maps.size() || j >= maps.size()) continue;
                    if (abs(LUX - i) + abs(LUY - j) == (r / 2) - 1) {
                        if (p / 2 >= arr[i][j]) magicClear++;
                    } else {
                        if (p >= arr[i][j]) magicClear++;
                    }
                }
                check++;
            }

            check = 0;

            for (int i = RUX; i > RUX - (r / 2); i--) {
                for (int j = RUY; j < RUY + (r / 2) - check; j++) {
                    if (i < 0 || j < 0 || i >= maps.size() || j >= maps.size()) continue;
                    if (abs(RUX - i) + abs(RUY - j) == (r / 2) - 1) {
                        if (p / 2 >= arr[i][j]) magicClear++;
                    } else {
                        if (p >= arr[i][j]) magicClear++;
                    }
                }
                check++;
            }

            check = 0;

            for (int i = LDX; i < LDX + (r / 2); i++) {
                for (int j = LDY; j > LDY - (r / 2) + check; j--) {
                    if (i < 0 || j < 0 || i >= maps.size() || j >= maps.size()) continue;
                    if (abs(LDX - i) + abs(LDY - j) == (r / 2) - 1) {
                        if (p / 2 >= arr[i][j]) magicClear++;
                    } else {
                        if (p >= arr[i][j]) magicClear++;
                    }
                }
                check++;
            }

            check = 0;

            for (int i = RDX; i < RDX + (r / 2); i++) {
                for (int j = RDY; j < RDY + (r / 2) - check; j++) {
                    if (i < 0 || j < 0 || i >= maps.size() || j >= maps.size()) continue;
                    if (abs(RDX - i) + abs(RDY - j) == (r / 2) - 1) {
                        if (p / 2 >= arr[i][j]) magicClear++;
                    } else {
                        if (p >= arr[i][j]) magicClear++;
                    }
                }
                check++;
            }

            answer = max(answer, magicClear);
        }
    }

    return answer;
}
/*
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define SIZE 10

typedef struct _contact {
    char name[5];
    char num[13];
    char addr[50];
} Contact;



int menu() {
    int select;
    printf("메뉴선택:\n");
    printf("1.리스트\n");
    printf("2.등록\n");
    printf("3.저장\n");
    printf("4.불러오기\n");
    printf("5.종료\n");
    scanf("%d", &select);
    return select;
}


void clearBuff() {
    while (getchar() != '\n');
}


void display (Contact ps[],int cnt) {

    int i;

    for(i=0;i<cnt;i++) {
      printf("이름:%s\n", ps[i].name);
      printf("전화번호:%s\n", ps[i].num);
      printf("주소:%s\n", ps[i].addr);
    }
}


void insert(Contact ps[], int *cnt) {

    printf("주소록 등록 -\n");
    clearBuff();
    printf("이름 :\n");
    fgets(ps[*cnt].name, sizeof(ps[*cnt].name), stdin);    
    clearBuff();
    printf("전화번호 :");
    fgets(ps[*cnt].num, sizeof(ps[*cnt].num), stdin);
    clearBuff();
    printf("주소 :");
    fgets(ps[*cnt].addr, sizeof(ps[*cnt].addr), stdin);

    (*cnt)++;
}


void save(Contact ps[], int cnt){
  
    int i;
    FILE *fp;

    fp = fopen("contact.txt","w");

    for(i=0;i<cnt;i++){
      fwrite(&ps[i],1,sizeof(SIZE),fp);
    };
    fclose(fp);

}

int load(Contact ps[]){
  
    int i = 0;
    int cnt;
    FILE *fp;
    
    fp = fopen("contact.txt","a");
    while (1)
    {
        cnt = fread(&ps[i], sizeof(Contact), 1,fp);
        if(cnt!=1){
            break;
        }; 
        i++;
    };
    fclose(fp);
}
*/

#include "contact.h"

int main(){

    int i ;
    int select;
    int cnt =0  ;
    CONTACT ps[SIZE];

      while (1)
        {
        select = menu();
        switch (select)
          {
            case 1:
              display(ps, cnt);
              break;
            case 2:
              insert(ps, &cnt);
              break;
            case 3:
              save(ps, cnt);
              break;
            case 4:
              load(ps);
              break;
            case 5:
              return 1;
            default:
              break;
          }
        }
      
    return 0;
}
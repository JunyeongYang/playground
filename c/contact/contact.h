#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// #include "contact.c"

#define SIZE 10

typedef struct _contact {
    char name[5];
    char num[13];
    char addr[50];
}CONTACT;

// typedef struct _contact CONTACT;



int menu();
void clearBuff();
void display(CONTACT ps[],int cnt);
void insert(CONTACT ps[], int *cnt);
void save(CONTACT ps[], int cnt);
int load(CONTACT ps[]);
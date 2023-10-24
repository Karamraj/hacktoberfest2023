

#include<iostream>
using namespace std;
class kcc{

    public:

    //state 
    int age;
    string name;
    string collage;
    //behaviour

    void work(){
        cout<<"vishal is busy in work"<<endl;

    }

    void study(){
        cout<<"last two hour "<<endl;

    }

    void weight(int w){
        int wi=w;

    }
};

int main(){

    //static
    kcc vishal;
    vishal.age=19;
    vishal.name="vishal kumar singh";
    vishal.collage="kcc institute of technology and mangement";

    cout<<"age of vishal"<<vishal.age<<endl;
    cout<<"full name of vishal"<<vishal.name<<endl;
    cout<<"collage name of vishal"<<vishal.collage<<endl;

    vishal.work();
    vishal.study();
    vishal.weight(101);
    // cout<<"weight of vishal"<<vishal.weight()<<endl;

    return 0;

}

<?php

namespace App\Http\Controllers;

use App\Models\CardList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class CardListController extends Controller
{
    private $cardList;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(CardList $cardList)
    {
        $this->cardList = $cardList;
    }

    public function index(){
        $cardLists = $this->cardList->paginate(10);
        return response()->json($cardLists);
    }

    public function show($cardList){
        return response()->json($this->cardList->find($cardList));
    }

    public function update($cardList, Request $request){
        
        $isUpdatedCard =  $this->cardList->find($cardList)->update($request->all());

        if ( $isUpdatedCard ){
            return response()->json(['data' => ['message' => 'card list successfully updated']]);
        }


    }
    

    public function store(Request $request){

            $cardList = new CardList;

            $cardList->title = $request->title;
            $cardList->content = $request->content;
            $cardList->user_id = $request->user_id;
            $cardList->card_list_id = $request->card_list_id;

            $cardList->save();

            return response()->json(['data' => ['message' => 'card list successfully created']]);
    }

    public function destroy($cardList){
        return $this->cardList->find($cardList)->delete() ? 'Deleted' : 'Error';
    }

    //
}

<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class CardController extends Controller
{
    private $card;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Card $card)
    {
        $this->card = $card;
    }

    public function index(Request $request){

        $cardsModel = $this->card;

        if( $request->input('cardList') ){
            $cardsModel = $this->card->where('card_list_id', '=', $request->input('cardList'));
        }

        $cards = $cardsModel->orderBy('order')->paginate(10);

        return response()->json($cards);
    }

    public function show($card){
        return response()->json($this->card->find($card));
    }

    public function update($card, Request $request){
        
        $isUpdatedCard =  $this->card->find($card)->update($request->all());

        if ( $isUpdatedCard ){
            return response()->json(['data' => ['message' => 'card successfully updated']]);
        }


    }
    

    public function store(Request $request){

            $card = new Card;

            $card->title = $request->title;
            $card->content = $request->content;
            $card->user_id = $request->user_id;
            $card->card_list_id = $request->card_list_id;

            $card->save();

            return response()->json(['data' => ['message' => 'card successfully created']]);
    }

    public function destroy($card){
        return $this->card->find($card)->delete() ? 'Deleted' : 'Error';
    }

    //
}

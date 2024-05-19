<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class SearchController extends Controller
{
     public function index($searchText)
    {
        $apiKey = env('GOOGLE_API_KEY');
        $cx = env('GOOGLE_CX');
        $text = $searchText;
        $client = new Client();
        $response = $client->request('GET', 'https://www.googleapis.com/customsearch/v1', [
            'query' => [
                'key' =>  $apiKey,
                'cx' => $cx,
                'q' => $text
            ]
        ]);

        return response()->json(json_decode($response->getBody()->getContents()));

        
        // return response()->json($text);
    }
}

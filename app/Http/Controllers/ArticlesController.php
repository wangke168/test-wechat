<?php

namespace App\Http\Controllers;

use App\WeChat\Count;
use App\WeChat\Usage;
use Carbon\Carbon;
use DB;
use App\Models\WechatArticle;

use Illuminate\Http\Request;



class ArticlesController extends Controller
{
    public $app;
    public $js;
    public $count;
    public $usage;

    public function __construct()
    {
        $this->app = app('wechat.official_account');

//        $this->js = $this->app->js;
        $this->count = new Count();
        $this->usage = new Usage();
    }

    /**
     * 打开二次推送页面
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function second_article_detail(Request $request)
    {
        $id = $request->input('id');
        $openid = $request->input('openid');
        $article = WechatArticle::find($id);
        if (!$article || $article->online == '0' || $article->enddate < Carbon::now()) {
            abort(404);
        } else {
            return view('articles.seconddetail', compact('article', 'id', 'openid'));
        }
    }


    /**
     * 文章列表测试
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $articles = DB::table('wx_article')->where('title', 'like', '门票%')->orderBy('id', 'desc')->skip(0)->take(2)->get();
        return view('articles.index', compact('articles'));
    }


    public function show($id)
    {
        $article = WechatArticle::find($id);

        return view('articles.show', compact('article'));
    }

    /**
     * 显示文章详情
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function detail(Request $request)
    {

    return($this->app->jssdk->buildConfig(array('onMenuShareQQ', 'onMenuShareWeibo'), true));

        $type = $request->input('type');
        $id = $request->input('id');
        $wxnumber = $request->input('wxnumber');

        $wxnumber = $this->usage->authcode($wxnumber, 'DECODE', 0);
        $openid = $request->input('openid');

        if ($wxnumber) {
            $openid = $wxnumber;
        }

        switch ($type) {
            case 'hs_show':
                $article = WechatArticle::find($id);
                if (!$article || $article->online == '0' || $article->enddate < Carbon::now()) {
                    abort(404);
                } else {
                    $this->count->add_article_hits($id);
                    $this->count->insert_hits($id, $openid);
                    return view('articles.detail_hs_show', compact('article', 'id', 'openid'));
                }
                break;
            case 'long':
                $rows_zone = DB::table('zone')
                    ->orderBy('priority', 'asc')
                    ->get();
                return view('articles.detail_show_all', compact('rows_zone', 'openid'));
                break;
            case 'detail':
                return view('articles.detail_show_all_detail');
                break;
            case 'short':
                $zone_id = $request->input('id');
                $row_zone = DB::table('zone')
                    ->where('id', $zone_id)
                    ->first();
                return view('articles.detail_show_one', compact('row_zone'));
                break;
            case 'se':                //二次推送
                $sellid = $request->input('sellid');
                $article = DB::table('wx_article_se')->find($id);
                $this->count->add_article_se_hits($id);
                $this->count->update_article_se_read($sellid, $openid, $id);
                return view('articles.detail', compact('article', 'id', 'openid'));
                break;
            default:
                $article = WechatArticle::find($id);
                if (!$article || $article->online == '0' || $article->enddate < Carbon::now()) {
                    abort(404);
                } else {
                    $this->count->add_article_hits($id);
                    $this->count->insert_hits($id, $openid);
                    return view('articles.detail', compact('article', 'id', 'openid'));
                }
                break;
        }

    }

    /**
     * 文章预览
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function detail_review(Request $request)
    {
        $type=$request->input('type');
        $id = $request->input('id');

        $openid = $request->input('openid');

        switch ($type){
            case 'article_se':
                $article=DB::table('wx_article_se')->find($id);
                break;
            default:
                $article = WechatArticle::find($id);
                break;
        }
        return view('articles.detailreview', compact('article', 'id', 'openid'));
    }

    /**
     * 官网使用的每日剧组动态和每周剧组动态
     * @param Request $request
     */
    public function webdetail(Request $request)
    {
        $type = $request->input('type');
        if ($type == 'day') {
            $article = WechatArticle::find('37');
        } elseif ($type == 'week') {
            $article = WechatArticle::find('38');
        }
        return view('articles.webdetail', compact('article'));
    }

    public function test(Request $request)
    {
        $id = $request->input('id');
        $wxnumber = $request->input('wxnumber');

        $wxnumber = $this->usage->authcode($wxnumber, 'DECODE', 0);
        $openid = $request->input('openid');

        if ($wxnumber) {
            $openid = $wxnumber;
        }

        $article = WechatArticle::find($id);
        if (!$article || $article->online == '0' || $article->enddate < Carbon::now()) {
            abort(404);
        } else {

            $this->count->add_article_hits($id);
            $this->count->insert_hits($id, $openid);

            return view('articles.detail_back', compact('article', 'id', 'openid'));
        }
    }
}
